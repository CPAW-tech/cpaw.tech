import mongoose from 'mongoose'
import 'dotenv/config'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI in a .env file')
}

const isConnected = false

export default function connectDB() {
    if (isConnected) {
        return
    }

    mongoose.connect(MONGODB_URI).catch((err) => {
        console.error(err)
    })
}

mongoose.connect.on('connected', () => {
    isConnected = true
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})
