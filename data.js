const ARTISTS = [
  // ── BRAZIL MATCH (Jun 13 - Brazil vs Morocco) ──────────────────────────
  {
    id: 1, name: "Anitta", country: "Brazil", genre: "Brazilian Funk / Pop",
    matchNight: "Jun 13 - Brazil vs Morocco", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 175000, feeMax: 225000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@anitta",
    followers: "70M+", why: "Brazilian icon. 70M Instagram. On The Weeknd's 2026 world tour. NYC Brazilian community is 300K+. This is her night.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 2, name: "Alok", country: "Brazil", genre: "Brazilian EDM / House",
    matchNight: "Jun 13 - Brazil vs Morocco", venue: "PHD Rooftop",
    slot: "5PM Pre-Game", tier: 2,
    feeMin: 80000, feeMax: 120000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@alok",
    followers: "25M+", why: "Brazil's biggest DJ. Rooftop pre-game energy. Brazilian crowd buys bottles early.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 3, name: "Ludmilla", country: "Brazil", genre: "Brazilian Funk",
    matchNight: "Jun 13 - Brazil vs Morocco", venue: "Harbor NYC",
    slot: "5PM Pre-Game", tier: 2,
    feeMin: 40000, feeMax: 65000,
    agent: "Traffic Sports Brazil", agentEmail: "contato@trafficbrasil.com.br",
    agentPhone: "+55 11 3094 5000", instagram: "@ludmilla",
    followers: "30M+", why: "Brazil's female funk queen. Huge NYC following. Works as Anitta support or standalone 5PM slot.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 4, name: "WC No Beat", country: "Brazil", genre: "Baile Funk / Electronic",
    matchNight: "Jun 13 - Brazil vs Morocco", venue: "Musica NYC",
    slot: "2PM Build-Up", tier: 3,
    feeMin: 15000, feeMax: 30000,
    agent: "Direct / DM @wcnobeat", agentEmail: "booking@wcnobeat.com",
    agentPhone: "", instagram: "@wcnobeat",
    followers: "5M+", why: "Baile funk build-up. Sets the Brazilian cultural tone before the main show. Musica afternoon slot.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── FRANCE MATCH (Jun 16 - France vs Senegal) ──────────────────────────
  {
    id: 5, name: "David Guetta", country: "France", genre: "French EDM / House",
    matchNight: "Jun 16 - France vs Senegal", venue: "Musica NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 175000, feeMax: 225000,
    agent: "CAA", agentEmail: "music@caa.com",
    agentPhone: "+1 424 288 2000", instagram: "@davidguetta",
    followers: "35M+", why: "French EDM legend. France is his country. Musica NYC is built for his sound. Automatic sell-out.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 6, name: "Burna Boy", country: "Senegal / Afrobeats", genre: "Afrobeats / Afro-fusion",
    matchNight: "Jun 16 - France vs Senegal", venue: "Harbor NYC",
    slot: "10PM Headline Alt", tier: 1,
    feeMin: 200000, feeMax: 275000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@burnaboygram",
    followers: "9M+", why: "African Giant. Bridges Senegal and West African diaspora in NYC. If booked for Senegal nights he doubles the room's cultural power.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 7, name: "DJ Snake", country: "France", genre: "French EDM / Trap",
    matchNight: "Jun 16 - France vs Senegal", venue: "Nebula",
    slot: "5PM Pre-Game", tier: 2,
    feeMin: 100000, feeMax: 150000,
    agent: "CAA", agentEmail: "music@caa.com",
    agentPhone: "+1 424 288 2000", instagram: "@djsnake",
    followers: "22M+", why: "French-Algerian producer. North African bridge to Senegal crowd. Pre-game Nebula set before the headline.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 8, name: "Tems", country: "Senegal / Afrobeats", genre: "Afrobeats / R&B",
    matchNight: "Jun 16 - France vs Senegal", venue: "Sei Less Restaurant",
    slot: "Private Dinner", tier: 2,
    feeMin: 80000, feeMax: 120000,
    agent: "UTA", agentEmail: "music@unitedtalent.com",
    agentPhone: "+1 310 273 6700", instagram: "@temsbaby",
    followers: "4M+", why: "Already performed FIFA Club WC Final at MetLife 2025. Warm FIFA relationship. Private Sei Less dinner activation.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── NORWAY vs SENEGAL (Jun 22) ────────────────────────────────────────
  {
    id: 9, name: "Afrobeats DJ Set", country: "Senegal", genre: "Afrobeats / House",
    matchNight: "Jun 22 - Norway vs Senegal", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 20000, feeMax: 50000,
    agent: "Direct booking via local NYC Afrobeats promoters", agentEmail: "booking@harbornycevents.com",
    agentPhone: "", instagram: "",
    followers: "", why: "Norway vs Senegal is a smaller demand night. Strong local NYC Afrobeats DJ set covers the room at lower cost. Save budget for bigger nights.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 10, name: "Alan Walker", country: "Norway", genre: "EDM / Electronic",
    matchNight: "Jun 22 - Norway vs Senegal", venue: "Musica NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 100000, feeMax: 150000,
    agent: "CAA", agentEmail: "music@caa.com",
    agentPhone: "+1 424 288 2000", instagram: "@alanwalkermusic",
    followers: "20M+", why: "Norwegian producer. Norway match night. His face masks are iconic. Musica NYC is the right electronic room for this.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── ECUADOR vs GERMANY (Jun 25) ───────────────────────────────────────
  {
    id: 11, name: "Bizarrap", country: "Argentina / Latin", genre: "Latin Electronic / Trap",
    matchNight: "Jun 25 - Ecuador vs Germany", venue: "Musica NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 120000, feeMax: 175000,
    agent: "Range Media Partners", agentEmail: "info@rangemediapartners.com",
    agentPhone: "+1 310 954 9333", instagram: "@bizarrap",
    followers: "15M+", why: "Argentina producer with global Latin electronic sound. Bridges Ecuador fans and broader Latin crowd. Musica NYC is his room.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 12, name: "Boris Brejcha", country: "Germany", genre: "High-Tech Minimal / Techno",
    matchNight: "Jun 25 - Ecuador vs Germany", venue: "Musica NYC",
    slot: "10PM Headline Alt", tier: 2,
    feeMin: 80000, feeMax: 120000,
    agent: "FCKNG SERIOUS", agentEmail: "booking@fckngserious.com",
    agentPhone: "+49 30 12345678", instagram: "@borisbrejcha",
    followers: "3M+", why: "Germany's biggest underground DJ export. His jester mask is iconic. NYC German expat community for this match night.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 13, name: "Nicki Nicole", country: "Ecuador / Latin", genre: "Trap Latino / Urban",
    matchNight: "Jun 25 - Ecuador vs Germany", venue: "Harbor NYC",
    slot: "5PM Pre-Game", tier: 3,
    feeMin: 40000, feeMax: 70000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@nickinicole",
    followers: "8M+", why: "Argentine-Ecuadorian crossover. South American trap. Pre-game slot Harbor pulls the Latin crowd before Germany fans arrive.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── PANAMA vs ENGLAND (Jun 27) ────────────────────────────────────────
  {
    id: 14, name: "Stormzy", country: "England", genre: "UK Grime / Hip-Hop",
    matchNight: "Jun 27 - Panama vs England", venue: "Nebula",
    slot: "10PM Headline", tier: 1,
    feeMin: 150000, feeMax: 200000,
    agent: "CAA London", agentEmail: "london.music@caa.com",
    agentPhone: "+44 20 3214 0800", instagram: "@stormzy",
    followers: "12M+", why: "UK's biggest artist. England match night is made for him. Nebula 1,500 cap sells out in hours. This is the must-book for Jun 27.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 15, name: "Central Cee", country: "England", genre: "UK Rap / Drill",
    matchNight: "Jun 27 - Panama vs England", venue: "Stafford Room",
    slot: "2PM Build-Up", tier: 2,
    feeMin: 60000, feeMax: 90000,
    agent: "CAA London", agentEmail: "london.music@caa.com",
    agentPhone: "+44 20 3214 0800", instagram: "@centralcee",
    followers: "8M+", why: "Younger UK crowd. Afternoon build-up slot. Cheaper than Stormzy, same cultural energy. Stafford Room is perfect size.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 16, name: "Headie One", country: "England", genre: "UK Drill",
    matchNight: "Jun 27 - Panama vs England", venue: "Whisper Room",
    slot: "2PM Build-Up", tier: 3,
    feeMin: 25000, feeMax: 45000,
    agent: "Direct / 0207 Def Jam", agentEmail: "booking@0207defjam.com",
    agentPhone: "+44 20 7432 1000", instagram: "@headie_one",
    followers: "2M+", why: "UK drill pioneer. Afternoon slot Whisper Room. England crowd loves him. Cost effective option for the 2PM slot.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 17, name: "Jorja Smith", country: "England", genre: "UK R&B / Soul",
    matchNight: "Jun 27 - Panama vs England", venue: "Sei Less Restaurant",
    slot: "Private Dinner Performance", tier: 2,
    feeMin: 60000, feeMax: 100000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@jorjasmith",
    followers: "5M+", why: "English soul. Sei Less private dining performance for corporate England night. Intimate and premium. Completely different from Nebula.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── ROUND OF 32 (Jun 30) ──────────────────────────────────────────────
  {
    id: 18, name: "DJ Khaled", country: "USA", genre: "Hip-Hop / Open Format",
    matchNight: "Jun 30 - Round of 32", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 150000, feeMax: 200000,
    agent: "CAA", agentEmail: "music@caa.com",
    agentPhone: "+1 424 288 2000", instagram: "@djkhaled",
    followers: "33M+", why: "NYC native. Works any knockout night regardless of teams. Widest possible audience. Harbor is his room. Another one.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 19, name: "Diplo", country: "USA", genre: "Electronic / Open Format",
    matchNight: "Jun 30 - Round of 32", venue: "Musica NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 100000, feeMax: 150000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@diplo",
    followers: "18M+", why: "Global sound. Works every country. Knockout nights need a universal artist. Diplo is the safest high-value booking for unknown teams.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── ROUND OF 16 (Jul 5) ───────────────────────────────────────────────
  {
    id: 20, name: "J Balvin", country: "Colombia / Latin", genre: "Reggaeton / Urban Latino",
    matchNight: "Jul 5 - Round of 16", venue: "Nebula",
    slot: "10PM Headline", tier: 1,
    feeMin: 225000, feeMax: 275000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@jbalvin",
    followers: "55M+", why: "Already performed FIFA Club WC Final at MetLife July 2025. Warmest FIFA relationship of any artist on this list. Round of 16 is peak demand.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 21, name: "Maluma", country: "Colombia / Latin", genre: "Reggaeton / Latin Pop",
    matchNight: "Jul 5 - Round of 16", venue: "Harbor NYC",
    slot: "5PM Pre-Game", tier: 2,
    feeMin: 100000, feeMax: 150000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@maluma",
    followers: "65M+", why: "Colombian reggaeton. Round of 16 pre-game. Latin America will have multiple teams still alive. Harbor fills before J Balvin at Nebula.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── WORLD CUP FINAL (Jul 19) ─────────────────────────────────────────
  {
    id: 22, name: "Bad Bunny", country: "Puerto Rico / Global", genre: "Reggaeton / Trap Latino",
    matchNight: "Jul 19 - WORLD CUP FINAL", venue: "Nebula",
    slot: "10PM Headline - FINAL NIGHT", tier: 1,
    feeMin: 400000, feeMax: 600000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@badbunnypr",
    followers: "45M+", why: "Super Bowl halftime 2026. Biggest Latin artist alive. On world tour. Final night at Nebula = the biggest hospitality moment of the summer. Non-negotiable.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 23, name: "Karol G", country: "Colombia / Global", genre: "Reggaeton / Urban Latina",
    matchNight: "Jul 19 - WORLD CUP FINAL", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 250000, feeMax: 350000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@karolg",
    followers: "65M+", why: "Coachella headliner 2026. Colombian queen. Final weekend Harbor runs simultaneously with Bad Bunny at Nebula. Two venues, two headliners, one night.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 24, name: "Peso Pluma", country: "Mexico", genre: "Regional Mexican / Corridos",
    matchNight: "Jul 19 - WORLD CUP FINAL", venue: "PHD Rooftop",
    slot: "5PM Pre-Game", tier: 1,
    feeMin: 175000, feeMax: 250000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@pesopluma",
    followers: "12M+", why: "Mexico has 1M+ fans in NYC metro. If Mexico reaches the Final it is the biggest night in NYC Latin music history. PHD Rooftop pre-game is the setup.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 25, name: "Shakira", country: "Colombia / Global", genre: "Latin Pop / Dance",
    matchNight: "Jul 19 - WORLD CUP FINAL", venue: "Sei Less Restaurant",
    slot: "Private VIP Dinner", tier: 1,
    feeMin: 400000, feeMax: 600000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@shakira",
    followers: "85M+", why: "Performed Copa America Final 2024. World Cup royalty. Private Sei Less dinner for 20 VIP guests on Final night. The most exclusive moment Dream can create.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── HOUSE / EDM FILLS - ALL VENUES ────────────────────────────────────
  {
    id: 26, name: "Martin Garrix", country: "Netherlands", genre: "Progressive House / EDM",
    matchNight: "Any knockout night", venue: "Musica NYC",
    slot: "10PM Headline", tier: 1,
    feeMin: 150000, feeMax: 200000,
    agent: "STMPD RCRDS / CAA", agentEmail: "booking@stmpdrcrds.com",
    agentPhone: "+31 20 123 4567", instagram: "@martingarrix",
    followers: "20M+", why: "Dutch producer. Netherlands has a passionate NYC fan base. Musica is the perfect room. Works any knockout night as a crowd-neutral booking.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 27, name: "Fisher", country: "Australia / House", genre: "Tech House",
    matchNight: "Any night - backup headliner", venue: "Musica NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 80000, feeMax: 130000,
    agent: "Paradigm Agency", agentEmail: "booking@paradigmagency.com",
    agentPhone: "+1 310 288 8000", instagram: "@fisher",
    followers: "3M+", why: "Tech house. Universal crowd. If any Tier 1 booking falls through Fisher fills Musica immediately. Known for high-energy sets that work any room.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 28, name: "Chris Lake", country: "UK / House", genre: "House / Tech House",
    matchNight: "Any night - Musica or Harbor", venue: "Musica NYC",
    slot: "10PM or 2AM", tier: 2,
    feeMin: 50000, feeMax: 90000,
    agent: "Paradigm Agency", agentEmail: "booking@paradigmagency.com",
    agentPhone: "+1 310 288 8000", instagram: "@chrislake",
    followers: "1M+", why: "LA-based British house DJ. Huge in NYC. Cost-effective for mid-week nights. Often plays after midnight. Works Harbor main room or Musica.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 29, name: "Vintage Culture", country: "Brazil / House", genre: "Brazilian House / Melodic Techno",
    matchNight: "Jun 13 or any Brazil night", venue: "Musica NYC",
    slot: "2AM Late Night", tier: 2,
    feeMin: 40000, feeMax: 75000,
    agent: "Direct / booking@vintageculture.com.br", agentEmail: "booking@vintageculture.com.br",
    agentPhone: "", instagram: "@vintageculture",
    followers: "3M+", why: "Brazilian house export. Brazil match night late set. Bridges the Anitta headline crowd into a proper house music after-party.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── HIP HOP FILLS ─────────────────────────────────────────────────────
  {
    id: 30, name: "Lil Baby", country: "USA", genre: "Hip-Hop / Trap",
    matchNight: "USA match or knockout", venue: "Nebula or Harbor",
    slot: "10PM Headline", tier: 1,
    feeMin: 175000, feeMax: 250000,
    agent: "CAA", agentEmail: "music@caa.com",
    agentPhone: "+1 424 288 2000", instagram: "@lilbaby",
    followers: "18M+", why: "USA match nights need a hip-hop anchor. Lil Baby is the crowd-puller for the NYC audience that does not follow soccer but will show up for him.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 31, name: "Cardi B", country: "USA / Dominican", genre: "Hip-Hop / Trap",
    matchNight: "USA match or Final weekend", venue: "Nebula",
    slot: "10PM Headline", tier: 1,
    feeMin: 200000, feeMax: 300000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@iamcardib",
    followers: "45M+", why: "Bronx native. Dominican roots. Crossover for Latin and hip-hop crowds. If she shows up on any night it is a Page Six moment the next morning.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 32, name: "Fivio Foreign", country: "USA / Brooklyn", genre: "NYC Drill",
    matchNight: "Any USA match night", venue: "Stafford Room",
    slot: "10PM Headline", tier: 3,
    feeMin: 30000, feeMax: 60000,
    agent: "Columbia Records / direct", agentEmail: "contact@fivioforeign.com",
    agentPhone: "", instagram: "@fivioforeign",
    followers: "3M+", why: "Brooklyn native. NYC drill. Cost-effective headline for Stafford Room on USA match nights. Local credibility.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── LATIN / INTERNATIONAL FILLS ───────────────────────────────────────
  {
    id: 33, name: "Farruko", country: "Puerto Rico", genre: "Reggaeton",
    matchNight: "Latin match nights", venue: "Harbor NYC",
    slot: "5PM Pre-Game", tier: 2,
    feeMin: 60000, feeMax: 100000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@farruko",
    followers: "18M+", why: "Puerto Rican reggaeton. Bridges Bad Bunny crowd for pre-game slots. Works any Latin match night.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 34, name: "Sech", country: "Panama", genre: "Reggaeton / Dancehall",
    matchNight: "Jun 27 - Panama vs England", venue: "Whisper Room",
    slot: "5PM Pre-Game", tier: 3,
    feeMin: 25000, feeMax: 50000,
    agent: "Sony Music Latin / WME", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@sech",
    followers: "8M+", why: "Panamanian star. Panama vs England night. Whisper Room pre-game for the Panamanian fan community in NYC. Affordable and culturally perfect.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 35, name: "Doja Cat", country: "USA", genre: "Pop / Hip-Hop / R&B",
    matchNight: "Final weekend July 17-19", venue: "Nebula",
    slot: "10PM Headline", tier: 1,
    feeMin: 250000, feeMax: 350000,
    agent: "WME", agentEmail: "music@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@dojacat",
    followers: "25M+", why: "Already performed FIFA Club WC Final at MetLife 2025. Warm FIFA relationship. Final weekend Nebula if Bad Bunny takes the actual Final night.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 36, name: "Ozuna", country: "Puerto Rico", genre: "Reggaeton / Latin Trap",
    matchNight: "Any Latin match night", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 100000, feeMax: 175000,
    agent: "WME Latin", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@ozuna",
    followers: "35M+", why: "One of the most-streamed Latin artists ever. Flexible booking for any Latin match night. Harbor headline.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 37, name: "Jhayco", country: "Puerto Rico", genre: "Latin R&B / Reggaeton",
    matchNight: "Any Latin match night", venue: "Stafford Room",
    slot: "10PM Headline", tier: 2,
    feeMin: 50000, feeMax: 85000,
    agent: "Republic Records / WME", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@jhayco",
    followers: "10M+", why: "Romantic urban. Stafford Room intimate vibe. Works well for Latin match nights where you want a different energy from Nebula.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 38, name: "Feid", country: "Colombia", genre: "Urbano / Reggaeton",
    matchNight: "Any Latin match night", venue: "Harbor NYC",
    slot: "10PM Headline", tier: 2,
    feeMin: 80000, feeMax: 130000,
    agent: "Universal Music Latin / WME", agentEmail: "latinmusic@wmeagency.com",
    agentPhone: "+1 310 285 9000", instagram: "@feid",
    followers: "20M+", why: "Colombian urbano. Massive following. Harbor headline for Colombia or general Latin nights. Growing faster than anyone in the genre.",
    status: "New", notes: "", bookedVenue: null
  },

  // ── RESTAURANT PROGRAMMING ────────────────────────────────────────────
  {
    id: 39, name: "Jazz / Bossa Nova Quartet", country: "Brazil", genre: "Jazz / Bossa Nova",
    matchNight: "Jun 13 - Brazil vs Morocco", venue: "Sei Less Restaurant",
    slot: "Dinner Ambiance 7-10PM", tier: 3,
    feeMin: 3000, feeMax: 8000,
    agent: "Local NYC booking via jazznewyork.com", agentEmail: "info@jazznewyork.com",
    agentPhone: "+1 212 555 0100", instagram: "",
    followers: "", why: "Live bossa nova during Brazil match night dinner. Sei Less premium dining atmosphere. Brazilian cultural moment before guests head to Harbor.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 40, name: "Flamenco Guitarist", country: "Spain", genre: "Flamenco / Spanish Guitar",
    matchNight: "Spanish match nights", venue: "Tucci NYC Restaurant",
    slot: "Dinner Ambiance 7-10PM", tier: 3,
    feeMin: 2000, feeMax: 5000,
    agent: "Local NYC / direct", agentEmail: "info@tuccinyc.com",
    agentPhone: "", instagram: "",
    followers: "", why: "When Italy or Spain play, Tucci activates with Spanish guitar. Cultural touch that justifies the prix fixe premium and drives social content.",
    status: "New", notes: "", bookedVenue: null
  },
  {
    id: 41, name: "Bouzouki Live", country: "Greece", genre: "Greek Traditional",
    matchNight: "Greek cultural nights", venue: "Pappas NY Restaurant",
    slot: "Dinner Ambiance 7-10PM", tier: 3,
    feeMin: 2000, feeMax: 5000,
    agent: "Direct / local NYC Greek musicians", agentEmail: "info@pappasny.com",
    agentPhone: "", instagram: "",
    followers: "", why: "Pappas is Greek-owned. Live bouzouki one night per week during the tournament. Cultural authenticity. NYC Greek community is large and loyal.",
    status: "New", notes: "", bookedVenue: null
  }
];

const VENUES = [
  { id: "nebula", name: "Nebula", type: "Nightclub", capacity: 1500, neighborhood: "Times Square", bestFor: "Biggest headline acts, Final night, England / Brazil / Latin nights" },
  { id: "harbor", name: "Harbor NYC", type: "Nightclub", capacity: 1000, neighborhood: "Midtown West", bestFor: "Brazil, USA, Afrobeats nights, corporate buyouts" },
  { id: "musica", name: "Musica NYC", type: "Nightclub", capacity: 1000, neighborhood: "Hell's Kitchen", bestFor: "EDM, house, France, Germany, electronic nights" },
  { id: "stafford", name: "Stafford Room", type: "Sub-venue", capacity: 400, neighborhood: "Midtown", bestFor: "UK rap, drill, afternoon build-up sets" },
  { id: "whisper", name: "Whisper Room", type: "Lounge", capacity: 300, neighborhood: "Midtown", bestFor: "Intimate headline, 5PM pre-game, private events" },
  { id: "phd", name: "PHD Rooftop", type: "Rooftop", capacity: 500, neighborhood: "Dream Midtown Hotel", bestFor: "Afternoon 2PM sets, DJ sets, rooftop vibes, Brazil / Mexico" },
  { id: "petite", name: "Petite", type: "Lounge", capacity: 200, neighborhood: "Midtown", bestFor: "Ultra VIP private, agent dinners, athlete after-parties" },
  { id: "sei-less", name: "Sei Less", type: "Restaurant", capacity: 200, neighborhood: "Midtown East", bestFor: "Private athlete dinners, corporate VIP, celebrity activations" },
  { id: "tucci", name: "Tucci NYC", type: "Restaurant", capacity: 180, neighborhood: "NoHo", bestFor: "Italy / Spain / European match nights, private dining buyouts" },
  { id: "pappas", name: "Pappas NY", type: "Restaurant", capacity: 160, neighborhood: "Greenwich Village", bestFor: "Greek-themed nights, Mediterranean match nights, cultural programming" }
];

const MATCHES = [
  { date: "Jun 13", day: "Saturday", time: "6:00 PM", teams: "Brazil vs Morocco", group: "Group C", type: "Group Stage", fanDemand: "Very High", countries: ["Brazil", "Morocco"] },
  { date: "Jun 16", day: "Tuesday", time: "3:00 PM", teams: "France vs Senegal", group: "Group I", type: "Group Stage", fanDemand: "High", countries: ["France", "Senegal"] },
  { date: "Jun 22", day: "Monday", time: "8:00 PM", teams: "Norway vs Senegal", group: "Group I", type: "Group Stage", fanDemand: "Medium", countries: ["Norway", "Senegal"] },
  { date: "Jun 25", day: "Thursday", time: "4:00 PM", teams: "Ecuador vs Germany", group: "Group E", type: "Group Stage", fanDemand: "Medium", countries: ["Ecuador", "Germany"] },
  { date: "Jun 27", day: "Saturday", time: "5:00 PM", teams: "Panama vs England", group: "Group L", type: "Group Stage", fanDemand: "Very High", countries: ["Panama", "England"] },
  { date: "Jun 30", day: "Tuesday", time: "5:00 PM", teams: "Round of 32", group: "Knockout", type: "Round of 32", fanDemand: "High", countries: [] },
  { date: "Jul 5", day: "Sunday", time: "4:00 PM", teams: "Round of 16", group: "Knockout", type: "Round of 16", fanDemand: "Very High", countries: [] },
  { date: "Jul 19", day: "Sunday", time: "3:00 PM", teams: "WORLD CUP FINAL", group: "FINAL", type: "Final", fanDemand: "PEAK", countries: [] }
];

module.exports = { ARTISTS, VENUES, MATCHES };
