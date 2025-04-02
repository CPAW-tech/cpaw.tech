import { object, string, boolean } from 'yup'
import { useNavigate } from 'react-router'
import { useAtom, useSetAtom } from 'jotai'

import {
    formDataAtom,
    firstnameAtom,
    lastnameAtom,
    usernameAtom,
    emailAtom,
    passwordAtom,
    isNonProfitAtom,
} from '../../atoms/signupAtoms'
import { userAuthAtom } from '../../atoms/userContextAtoms'

export default function SignUp() {
    let navigate = useNavigate()

    const [formData] = useAtom(formDataAtom)
    const [firstname, setFirstname] = useAtom(firstnameAtom)
    const [lastname, setLastname] = useAtom(lastnameAtom)
    const [username, setUsername] = useAtom(usernameAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    const [isNonProfit, setIsNonProfit] = useAtom(isNonProfitAtom)

    const setUser = useSetAtom(userAuthAtom)

    const handleSubmit = async () => {
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
        let signedupUser = await fetch(
            'http://localhost:3000/api/auth/signup',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            }
        )

        let jsonUser = await signedupUser.json()

        setUser(jsonUser)

        navigate('/dashboard')
    }

    return (
        <>
            <div>
                <form className="flex flex-col w-[30vw]" action={handleSubmit}>
                    <label htmlFor="fname">First Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="fname"
                        placeholder="John"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="lname">Last Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="lname"
                        placeholder="Smith"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="username"
                        placeholder="john.smith"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        className="border box-border border-black"
                        type="email"
                        id="email"
                        placeholder="john.smith@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        className="border box-border border-black"
                        type="password"
                        id="password"
                        placeholder="password123!"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex flex-row justify-around">
                        <div>
                            <input
                                type="radio"
                                id="student"
                                checked={!isNonProfit}
                                onChange={() => setIsNonProfit(false)}
                            />
                            <label htmlFor="student">Student</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="nonprofit"
                                checked={isNonProfit}
                                onChange={() => setIsNonProfit(true)}
                            />
                            <label htmlFor="nonprofit">Non Profit</label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
