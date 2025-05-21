import { object, string } from 'yup'
import { useNavigate } from 'react-router'
import { atom, useAtom, useSetAtom } from 'jotai'
import { setUserAuthAtom } from '../../atoms/userContextAtoms'

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
    const setUser = useSetAtom(setUserAuthAtom)

    const navigate = useNavigate()

    const handleSubmit = async () => {
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
        let logedinUser = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            credentials: 'include', //allows cookies to be set
        }).catch((e) => {
            console.error(e)
        })

        let jsonUser = await logedinUser.json()

        console.log(jsonUser)

        setUser(jsonUser)

        navigate('/dashboard')
    }

    //TODO: find a way to reuse styles. consider refactor into loop
    return (
        <>
            <div className="flex flex-row justify-around items-center">
                <form
                    className="flex flex-col w-[30vw] gap-1"
                    action={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label htmlFor="username" className="font-bold">
                            Username:
                        </label>
                        <input
                            className="border box-border border-black rounded p-1"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="john.smith"
                            value={username}
                            onChange={(e) => changeUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-bold">
                            Password:
                        </label>
                        <input
                            className="border box-border border-black rounded p-1"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password123!"
                            value={password}
                            onChange={(e) => changePassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="font-bold border rounded">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
