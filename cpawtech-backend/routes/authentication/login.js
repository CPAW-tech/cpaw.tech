import connectDB from '../../lib/mongoose.js'
import User from '../../models/user.js'

import bcrypt from 'bcrypt'

export default async function login(data) {
    await connectDB()

    let user = await User.findOne({ username: data.username }).exec()
    if (user.length == 0) {
        console.log('oops')
        return { ok: false, err: 'user not found' }
    }

    const match = await bcrypt.compare(data.password, user.password)

    if (match) {
        return { ok: true }
    }

    return { ok: false, err: 'invalid password' }
}
