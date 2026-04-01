const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  try {
    const { to, subject, body, artistName } = JSON.parse(event.body || "{}");
    if (!to || !subject || !body) return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing to, subject, or body" }) };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:#f4f4f4;padding:24px 0;font-family:Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:6px;overflow:hidden;border:1px solid #e0e0e0">
    <div style="background:#0D0D0D;padding:16px 24px;display:flex;align-items:center;gap:12px">
      <div style="width:8px;height:32px;background:#C9A84C;border-radius:2px;flex-shrink:0"></div>
      <span style="color:#C9A84C;font-size:15px;font-weight:700;letter-spacing:1.5px">DREAM HOSPITALITY GROUP</span>
    </div>
    <div style="padding:24px">
      ${body.split("\n").map(line => line.trim() ? `<p style="margin:0 0 10px;font-size:14px;line-height:1.65;color:#1a1a1a">${line}</p>` : "<br>").join("")}
    </div>
    <div style="background:#f9f9f9;padding:14px 24px;border-top:1px solid #eee">
      <p style="margin:0;font-size:11px;color:#999">Dream Hospitality Group · New York City · World Cup 2026 Artist Programming</p>
      <p style="margin:4px 0 0;font-size:11px;color:#bbb">Nebula · Harbor NYC · Musica · Stafford Room · Whisper Room · PHD Rooftop · Petite · Sei Less · Tucci · Pappas</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Dream Hospitality Group" <${process.env.EMAIL_USER}>`,
      to, subject, text: body, html: htmlBody,
      replyTo: process.env.EMAIL_USER,
    });

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, to, subject }) };
  } catch (err) {
    console.error("[Email Error]", err.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
