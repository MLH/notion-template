const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Notion Express Server!' });
});

app.get('/', (req, res) => {
  res.send('Server is running. Access /api/message for the message API.');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
