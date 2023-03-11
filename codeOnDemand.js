const express = require('express');
const app = express();

app.get('/eval', (req, res) => {
  const code = req.query.code;
  let result;
  try {
    // Use eval() to execute the code provided in the query parameter
    result = eval(code);
  } catch (e) {
    // If an error occurs during evaluation, return the error message
    return res.status(400).json({ error: e.message });
  }
  // If evaluation is successful, return the result
  res.json({ result });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});