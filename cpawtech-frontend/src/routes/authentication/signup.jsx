import { object, string, boolean } from 'yup'

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const formDataJson = Object.fromEntries(formData)

        const remixedData = {
            name: {
                fname: formDataJson.fname,
                lname: formDataJson.lname,
            },
            username: formDataJson.username,
            email: formDataJson.email,
            password: formDataJson.password,
            isNonProfit: formDataJson.isNonProfit == 'Student' ? false : true,
        }

        let userSchema = object({
            name: object({
                fname: string()
                    .required('First Name is Required')
                    .min(1, 'Minimum of 1 Character for First Name')
                    .max(100, 'Maximum of 100 Characters for First Name')
                    .trim(),
                lname: string()
                    .required('Last Name is Required')
                    .min(1, 'Minimum of 1 Character for Last Name')
                    .max(100, 'Maximum of 100 Characters for Last Name')
                    .trim(),
            }),
            username: string().required().min(1).max(100).trim(),
            email: string().email().required().min(1).max(200).trim(),
            password: string()
                .required()
                .min(1)
                .max(100)
                .matches(/^[a-zA-Z0-9!@#$%^&*]+$/),
            isNonProfit: boolean().required(),
        })

        let user

        try {
            user = await userSchema.validate(remixedData, { abortEarly: false })
        } catch (e) {
            let errors = {}

            e.inner.forEach((err) => {
                if (err.path in errors) {
                    errors[err.path].push(err.message)
                } else {
                    errors[err.path] = [err.message]
                }
            })
        }

        await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
    }

    return (
        <>
            <div>
                <form
                    className="flex flex-col w-[30vw]"
                    onSubmit={handleSubmit}
                >
                    <label for="fname">First Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="John"
                    />
                    <label for="lname">Last Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Smith"
                    />
                    <label for="username">Username:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="john.smith"
                    />
                    <label for="email">Email:</label>
                    <input
                        className="border box-border border-black"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.smith@gmail.com"
                    />
                    <label for="password">Password:</label>
                    <input
                        className="border box-border border-black"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password123!"
                    />
                    <div className="flex flex-row justify-around">
                        <div>
                            <input
                                type="radio"
                                id="student"
                                name="isNonProfit"
                                value="Student"
                            />
                            <label for="student">Student</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="nonprofit"
                                name="isNonProfit"
                                value="Non Profit"
                            />
                            <label for="nonprofit">Non Profit</label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
