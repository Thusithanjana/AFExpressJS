const express = require('express');
const app = express();

// Cache middleware
const cache = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cacheStore.get(key);

  if (cachedResponse) {
    console.log('Cache hit:', key);
    res.send(cachedResponse);
  } else {
    console.log('Cache miss:', key);
    res.sendResponse = res.send;
    res.send = (body) => {
      cacheStore.set(key, body);
      res.sendResponse(body);
    };
    next();
  }
};

// Example route using cache middleware
app.get('/api/data', cache, (req, res) => {
  // retrieve data from database or external API
  const data = { message: 'Hello, World!' };
  res.json(data);
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));