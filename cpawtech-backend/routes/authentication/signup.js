import connectDB from '../../lib/mongoose.js'
import User from '../../models/user.js'

export default async function signup(data) {
    console.log(data)
    await connectDB()
    const newUser = new User(data)
    await newUser.save()
}
