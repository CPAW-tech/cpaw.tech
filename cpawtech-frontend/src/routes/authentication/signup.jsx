import { object, string, boolean } from 'yup'
import { useUserDispatch } from '../../context/user'
import { useNavigate } from 'react-router'

import { createFieldAtom } from '../../atoms/formAtoms'
import { atom, useAtom } from 'jotai'

const formDataAtom = atom({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    isNonProfit: false,
})

export default function SignUp() {
    const userDispatch = useUserDispatch()
    let navigate = useNavigate()

    const [formData, createFieldAtom] = useAtom(formDataAtom)
    const [firstname, setFirstname] = useAtom(
        createFieldAtom(formDataAtom, 'fname')
    )
    const [lastname, setLastname] = useAtom(
        createFieldAtom(formDataAtom, 'lname')
    )
    const [username, setUsername] = useAtom(
        createFieldAtom(formDataAtom, 'username')
    )
    const [email, setEmail] = useAtom(createFieldAtom(formDataAtom, 'email'))
    const [password, setPassword] = useAtom(
        createFieldAtom(formDataAtom, 'password')
    )
    const [isNonProfit, setIsNonProfit] = useAtom(
        createFieldAtom(formDataAtom, 'isNonProfit')
    )

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

        let signedupUser = await fetch(
            'http://localhost:3000/api/auth/signup',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            }
        )

        let jsonUser = await signedupUser.json()

        userDispatch({
            type: 'refresh',
            username: jsonUser.username,
            isNonProfit: jsonUser.isNonProfit,
            exp: Date.now() + 1200000,
        })

        navigate('/dashboard')
    }

    return (
        <>
            <div>
                <form
                    className="flex flex-col w-[30vw]"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="fname">First Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="John"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="lname">Last Name:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Smith"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="john.smith"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        className="border box-border border-black"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.smith@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        className="border box-border border-black"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password123!"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex flex-row justify-around">
                        <div>
                            <input
                                type="radio"
                                id="student"
                                name="isNonProfit"
                                value="Student"
                                checked={!isNonProfit}
                                onChange={() => setIsNonProfit(false)}
                            />
                            <label htmlFor="student">Student</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="nonprofit"
                                name="isNonProfit"
                                value="Non Profit"
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
