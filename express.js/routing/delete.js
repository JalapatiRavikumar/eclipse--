const express = require('express');
const app = express();

app.delete('/delete', (req, res) => {
  res.send('This is a DELETE request');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
