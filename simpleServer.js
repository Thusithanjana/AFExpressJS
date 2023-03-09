const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});