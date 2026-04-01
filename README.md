# Dream Hospitality — WC 2026 Artist Booking Engine

## What this does
- 41 artists mapped to all 8 NY/NJ match nights
- Claude AI searches and recommends artists
- One-click drafts personalized booking emails to agents
- Sends real emails via Gmail
- Tracks booking pipeline (New → Outreach → Replied → Confirmed)
- All 10 venues programmed

---

## Deploy to Netlify in 10 minutes

### Step 1 — Create GitHub repo
1. Go to github.com — click "New repository"
2. Name it "dream-booking"
3. Keep it private
4. Click "Create repository"

### Step 2 — Push this code to GitHub
In this folder, run:
```
git init
git add .
git commit -m "Dream booking engine"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dream-booking.git
git push -u origin main
```

### Step 3 — Connect to Netlify
1. Go to netlify.com — log in
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub → select "dream-booking"
4. Build settings: leave all blank (netlify.toml handles it)
5. Click "Deploy site"

### Step 4 — Add environment variables in Netlify
In Netlify: Site settings → Environment variables → Add:

```
ANTHROPIC_API_KEY = sk-ant-...your key...
EMAIL_USER = your@gmail.com
EMAIL_PASS = your-gmail-app-password
```

### Step 5 — Redeploy
In Netlify: Deploys → "Trigger deploy" → Deploy site

Your app is now live at: https://YOUR-SITE.netlify.app

---

## Gmail App Password setup
1. myaccount.google.com → Security
2. Turn on 2-Step Verification if not already on
3. Search "App Passwords"
4. Create new → name it "Dream Booking"
5. Copy the 16-character code → paste into EMAIL_PASS

---

## Adding more artists
Edit `netlify/functions/data.js` — add to the ARTISTS array.
Push to GitHub → Netlify auto-deploys in 30 seconds.
