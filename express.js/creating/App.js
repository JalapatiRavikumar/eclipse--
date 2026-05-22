const express = require('express');
const app = express();

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, this is my Express server!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
