const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const { default: signup } = require('./routes/authentication/signup')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/auth/signup', async (req, res) => {
    let data = signup(req.body)
    res.json(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
