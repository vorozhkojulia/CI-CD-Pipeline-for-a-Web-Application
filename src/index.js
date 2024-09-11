// index.js

const express = require('express');
const app = express();
const port = 3000;

// pass to main page
app.get('/', (req, res) => {
  res.send('Hello, World! This is my CI/CD pipeline project.');
});

// Server start
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
