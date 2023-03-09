const express = require('express');
const app = express();

// Define a route to return a JSON object
app.get('/api/data', (req, res) => {
  const data = {
    studentId: 'John',
    year: 3,
    semester:1,
    center: 'Malabe'
  };
  res.json(data);
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});