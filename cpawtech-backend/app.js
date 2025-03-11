import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
import signup from './routes/authentication/signup.js'

import cors from 'cors'
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/auth/signup', async (req, res) => {
    let data = await signup(req.body)
    res.json(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
