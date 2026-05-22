const express = require('express');
const app = express();

app.use(express.json());  // Middleware to handle JSON data

app.post('/post', (req, res) => {
  res.send(`This is a POST request. You sent: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
