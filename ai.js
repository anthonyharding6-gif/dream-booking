const Anthropic = require("@anthropic-ai/sdk");
const { ARTISTS, VENUES, MATCHES } = require("./data");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are the AI booking assistant for Dream Hospitality Group's World Cup 2026 artist programming.

Dream operates 10 venues in NYC: Nebula (Times Square, 1,500 cap), Harbor NYC (Midtown, 1,000), Musica NYC (Hell's Kitchen, 1,000), Stafford Room (400), Whisper Room (300), PHD Rooftop (500), Petite (200), Sei Less restaurant (celebrity hotspot - Mbappe already visited), Tucci NYC (Italian, NoHo), Pappas NY (Greek, Greenwich Village).

Owner: George Karavias, 18+ years NYC nightlife. Has existing relationships with Drake, Cardi B, 50 Cent.

World Cup 2026 at MetLife Stadium (rebranded New York New Jersey Stadium):
- Jun 13: Brazil vs Morocco (6PM) - VERY HIGH demand
- Jun 16: France vs Senegal (3PM) - HIGH
- Jun 22: Norway vs Senegal (8PM) - MEDIUM
- Jun 25: Ecuador vs Germany (4PM) - MEDIUM
- Jun 27: Panama vs England (5PM) - VERY HIGH
- Jun 30: Round of 32 (5PM) - HIGH
- Jul 5: Round of 16 (4PM) - VERY HIGH
- Jul 19: WORLD CUP FINAL (3PM) - PEAK

Key facts: J Balvin, Doja Cat, Tems already performed FIFA Club WC Final at MetLife July 2025. Bad Bunny performed Super Bowl halftime Feb 2026. Coldplay curating WC Final halftime show. FIFA doing Times Square takeover for Final weekend.

Your job: Help George's team find the right artist for each night, draft booking emails to agents, and track the pipeline. Be specific, opinionated, and action-oriented.`;

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  try {
    const { action, message, artistId, matchNight, venue, genre } = JSON.parse(event.body || "{}");

    if (action === "chat") {
      const artistContext = ARTISTS.map(a =>
        `${a.name} (${a.country}, ${a.genre}, ${a.matchNight}, ${a.venue}, $${a.feeMin.toLocaleString()}-$${a.feeMax.toLocaleString()}, Status: ${a.status})`
      ).join("\n");

      const resp = await client.messages.create({
        model: "claude-opus-4-5-20251101",
        max_tokens: 800,
        system: SYSTEM + `\n\nCurrent artist database:\n${artistContext}`,
        messages: [{ role: "user", content: message }],
      });
      return { statusCode: 200, headers, body: JSON.stringify({ reply: resp.content[0].text }) };
    }

    if (action === "draft-email") {
      const artist = ARTISTS.find(a => a.id === artistId);
      if (!artist) return { statusCode: 404, headers, body: JSON.stringify({ error: "Artist not found" }) };

      const prompt = `Draft a professional booking inquiry email to the agent for ${artist.name}.

Agent: ${artist.agent}
Agent email: ${artist.agentEmail}
Artist: ${artist.name} (${artist.genre})
Match night: ${artist.matchNight}
Venue: ${artist.venue} — ${VENUES.find(v => v.name === artist.venue)?.bestFor || "premium NYC venue"}
Slot: ${artist.slot}
Budget range: $${artist.feeMin.toLocaleString()} - $${artist.feeMax.toLocaleString()}
Why this artist: ${artist.why}

Write a professional, specific, compelling booking inquiry. Under 180 words. Clear call to action. Sign off as Dream Hospitality Group booking team. Do NOT be generic. Reference the specific match night and why this artist is the right fit for this moment.

Return JSON only: {"subject": "...", "body": "..."}`;

      const resp = await client.messages.create({
        model: "claude-opus-4-5-20251101",
        max_tokens: 600,
        system: SYSTEM,
        messages: [{ role: "user", content: prompt }],
      });

      let result;
      try {
        const text = resp.content[0].text.replace(/```json|```/g, "").trim();
        result = JSON.parse(text);
      } catch {
        result = { subject: `Booking Inquiry - ${artist.name} - World Cup 2026 NYC`, body: resp.content[0].text };
      }
      return { statusCode: 200, headers, body: JSON.stringify(result) };
    }

    if (action === "search") {
      const q = (message || "").toLowerCase();
      let filtered = ARTISTS;
      if (q) {
        filtered = ARTISTS.filter(a =>
          a.name.toLowerCase().includes(q) ||
          a.genre.toLowerCase().includes(q) ||
          a.country.toLowerCase().includes(q) ||
          a.matchNight.toLowerCase().includes(q) ||
          a.venue.toLowerCase().includes(q) ||
          a.why.toLowerCase().includes(q)
        );
      }
      if (matchNight) filtered = filtered.filter(a => a.matchNight.toLowerCase().includes(matchNight.toLowerCase()));
      if (venue) filtered = filtered.filter(a => a.venue.toLowerCase().includes(venue.toLowerCase()));
      if (genre) filtered = filtered.filter(a => a.genre.toLowerCase().includes(genre.toLowerCase()));
      return { statusCode: 200, headers, body: JSON.stringify(filtered) };
    }

    if (action === "analyze") {
      const booked = ARTISTS.filter(a => a.status === "Confirmed").length;
      const outreach = ARTISTS.filter(a => a.status === "Outreach Sent").length;
      const total = ARTISTS.length;
      const budgetUsed = ARTISTS.filter(a => a.status === "Confirmed").reduce((s, a) => s + a.feeMin, 0);

      const prompt = `Analyze this Dream Hospitality booking status for World Cup 2026:
Total artists in database: ${total}
Confirmed bookings: ${booked}
Outreach sent: ${outreach}
Estimated budget committed: $${budgetUsed.toLocaleString()}
Next match: ${MATCHES[0].date} ${MATCHES[0].teams}

Give me: (1) What to prioritize booking this week, (2) Any gaps in the programming, (3) One strategic suggestion. Be specific and brief.`;

      const resp = await client.messages.create({
        model: "claude-opus-4-5-20251101",
        max_tokens: 500,
        system: SYSTEM,
        messages: [{ role: "user", content: prompt }],
      });
      return { statusCode: 200, headers, body: JSON.stringify({ analysis: resp.content[0].text }) };
    }

    return { statusCode: 400, headers, body: JSON.stringify({ error: "Unknown action" }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
