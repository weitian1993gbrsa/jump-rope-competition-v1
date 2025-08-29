# SkipTraq Jump Rope Web App

This repo contains 3 parts:
- **server/**: Node.js backend with Socket.IO (deploy to Render)
- **scorekeeper-client/**: Judges app (deploy to Netlify)
- **scoreboard-client/**: Host/Audience display (deploy to Netlify)

## Deployment
1. Deploy `server/` on Render.
2. Deploy `scorekeeper-client/` on Netlify.
3. Deploy `scoreboard-client/` on Netlify.
4. Update the socket URL in both frontends with your Render server URL.
