const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send('Hola! Mi app optimizada está up 🚀');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
