const express = require('express');
const app = express();

// Route that returns a 200 OK status code
app.get('/success', (req, res) => {
  res.status(200).send('Success!'); 
});

// Route that returns a 404 Not Found status code
app.get('/not-found', (req, res) => {
  res.status(404).send('Not found!');
});

// Route that returns a 500 Internal Server Error status code
app.get('/error', (req, res) => {
  res.status(500).send('Internal server error!');
});

// Default route that returns a 200 OK status code
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});