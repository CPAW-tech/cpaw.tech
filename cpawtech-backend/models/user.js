import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            first: {
                type: String,
                required: true,
            },
            last: {
                type: String,
                required: true,
            },
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isNonProfit: {
            type: Boolean,
            required: true,
        },
    },
    {
        virtuals: {
            fullname: {
                get() {
                    return `${this.name.first} ${this.name.last}`
                },
            },
        },
    }
)

// before saving a user hash its password
// bcrypt saves the salt within the returned value so no need to save that too
userSchema.pre('save', async function (next) {
    const saltingRounds = 10
    this.password = await bcrypt.hash(this.password, saltingRounds)
})

// allows password validation via bcrypt's hash checking function (compare)
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export default mongoose.model('User', userSchema)
