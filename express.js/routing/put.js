const express = require('express');
const app = express();

app.use(express.json());

app.put('/put', (req, res) => {
  res.send(`This is a PUT request. You updated: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
