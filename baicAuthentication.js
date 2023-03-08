const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: {
        'john123': 'web123'
    }
}))

app.get('/api/data', (req, res) => {
    res.send('This is protected data')
})

app.listen(3000, () => console.log('Server started on port 3000'))