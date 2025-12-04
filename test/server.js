// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// serve the static index.html and assets
app.use(express.static(path.join(__dirname)));

// simple in-memory log (demo only)
const logs = [];

app.post('/log', (req, res) => {
  const entry = req.body || {};
  entry.receivedAt = Date.now();
  logs.push(entry);
  console.log('[LOG]', entry);
  res.json({ok: true});
});

app.get('/logs', (req, res) => {
  res.json(logs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
