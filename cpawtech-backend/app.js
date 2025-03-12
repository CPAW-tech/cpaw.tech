import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
import signup from './routes/authentication/signup.js'
import login from './routes/authentication/login.js'

import cors from 'cors'
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// AUTHENTICATION
app.post('/api/auth/signup', async (req, res) => {
    let data = await signup(req.body)
    res.json(JSON.stringify(data))
})

app.post('/api/auth/login', async (req, res) => {
    let data = await login(req.body)
    res.json(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
