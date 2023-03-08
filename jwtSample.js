const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Secret key for JWT signing
const JWT_SECRET = 'mysecretkey';

// Sample user database
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', password: 'password123' },
  { id: 2, name: 'Bob', email: 'bob@example.com', password: 'password456' }
];

// Middleware for JWT authentication
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // Generate JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected endpoint
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'You are authorized to access this endpoint' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});