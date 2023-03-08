const express = require('express')
const app = express()

app.use((req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'JKR10234wrwq111') {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
})

app.get('/api/data', (req, res) => {
    res.send('This is protected data')
})

app.listen(3000, () => console.log('Server started on port 3000'))