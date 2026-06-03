# Baseball IQ — Web App (installable)

A React app that teaches situational baseball to young players. It's a full PWA
(Progressive Web App): it installs to the home screen, runs full-screen with a
custom Coach Bruce icon and splash screen, and works offline once loaded.

## Run it locally (test before deploying)

You need Node.js (https://nodejs.org — the "LTS" version is fine).

```bash
npm install      # one time
npm run dev      # local server at http://localhost:5173
```

> Note: the offline service worker only registers on a real build, not in
> `npm run dev`. To test offline behavior, run `npm run build` then
> `npm run preview` and load the previewed URL.

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repo:
   ```bash
   git init && git add . && git commit -m "Baseball IQ"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. https://vercel.com → Add New… → Project → import the repo.
3. Vercel auto-detects Vite. Keep defaults → Deploy.
4. You get a live URL like `baseball-iq.vercel.app`.

## Share with the team — "Add to Home Screen"

Text parents the Vercel URL. On the phone:

- **iPhone (Safari):** tap the Share button → **Add to Home Screen** → Add.
- **Android (Chrome):** tap the ⋮ menu → **Install app** / **Add to Home Screen**.

It then launches full-screen from the Coach Bruce icon — looks and behaves like
a downloaded app. No App Store, no install friction, and updates appear
automatically the next time it's opened after you redeploy.

## What makes it app-like (PWA features)

- **Custom icon** — Coach Bruce on the navy field (`public/icon-*.png`).
- **Splash screen** — themed loading screen on launch (`public/splash.png` +
  the inline boot splash in `index.html`).
- **Offline support** — `public/sw.js` caches the app shell so it loads
  instantly and keeps working on spotty field WiFi.
- **Standalone display** — no browser bars; opens like a native app.

### Updating the app

After changing code and redeploying, bump `CACHE_VERSION` in `public/sw.js`
(e.g. `baseball-iq-v1` → `v2`) so installed phones fetch the new version instead
of serving the old cached one.

## Notes

- Rewards (stars, ranks, badges) save per-device in the browser (`localStorage`).
  If a kid clears browser data or switches phones, their progress resets — that's
  expected for a no-login app. Cross-device progress would need a login + database.
- Test on one real iPhone and one Android before sending it out widely. Audio
  unlocks on the first screen tap (already handled).

## Going to the App Store later (optional)

This PWA is the first step. When you're ready to publish natively, wrap this same
build with **Capacitor** — it reuses this exact icon, manifest, and web build.
You'll also need an Apple Developer account ($99/yr) and a Mac with Xcode.
