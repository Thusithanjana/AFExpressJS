//This is for auth 2.0
const express = require('express')
const app = express()

app.use((req, res, next) => {
    const access_token = req.headers.authorization.split(' ')[1]
    if (access_token === 'HHE11122jQkwen1') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
})

app.get('/api/data', (req, res) => {
    res.send('This is protected data')
})

app.listen(3000, () => console.log('Server started on port 3000'))