import { object, string } from 'yup'
import { useNavigate } from 'react-router'
import { atom, useAtom } from 'jotai'

const usernameAtom = atom('')
const passwordAtom = atom('')

// utility read atom for future potential form data complexities
const formDataAtom = atom((get) => {
    return { username: get(usernameAtom), password: get(passwordAtom) }
})

export default function Login() {
    const [username, changeUsername] = useAtom(usernameAtom)
    const [password, changePassword] = useAtom(passwordAtom)
    const [formData] = useAtom(formDataAtom)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        console.log('insubmit')
        let userSchema = object({
            username: string().required().min(1).max(100).trim(),
            password: string()
                .required()
                .min(1)
                .max(100)
                .matches(/^[a-zA-Z0-9!@#$%^&*]+$/),
        })

        let user

        try {
            user = await userSchema.validate(formData, { abortEarly: false })
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

        // TODO: catch errors and set up a user context style thing with jotai
        // let logedinUser =
        await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            credentials: 'include', //allows cookies to be set
        }).catch((e) => {
            console.error(e)
        })

        // let jsonUser = await logedinUser.json()

        navigate('/dashboard')
    }

    return (
        <>
            <div>
                <form className="flex flex-col w-[30vw]" action={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="john.smith"
                        value={username}
                        onChange={(e) => changeUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        className="border box-border border-black"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password123!"
                        value={password}
                        onChange={(e) => changePassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
