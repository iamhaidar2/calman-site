// Calman marketing site — a tiny Express server for the static landing page.
//   npm install && npm start   → http://localhost:3000
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Long-cache the static assets (images/css); the HTML stays fresh.
app.use(
  express.static(PUBLIC, {
    extensions: ['html'],
    setHeaders: (res, filePath) => {
      if (/\.(png|jpg|jpeg|svg|webp|ico|woff2?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    },
  }),
);

// Single-page site: send index.html for anything not matched above.
app.get('*', (_req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));

app.listen(PORT, () => console.log(`calman site → http://localhost:${PORT}`));
