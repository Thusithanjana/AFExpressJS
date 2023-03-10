const express = require('express');
const app = express();


app.use(function (req, res, next) {
    res.status(404).send("Sorry page not found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});