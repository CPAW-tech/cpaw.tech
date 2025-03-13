import { object, string } from 'yup'
import { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'changed_username':
            return {
                username: action.nextUsername,
                password: state.password,
            }
        case 'changed_password':
            return {
                username: state.username,
                password: action.nextPassword,
            }
        default:
            throw Error('unknown dispatch command on login form')
    }
}

const initialState = { username: '', password: '' }

export default function Login() {
    const [state, dispatch] = useReducer(reducer, initialState)

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
            user = await userSchema.validate(state, { abortEarly: false })
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
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            credentials: 'include', //allows cookies to be set
        })

        // const data = await res.json()

        console.log(res)
    }

    const handleUsernameChange = (e) => {
        dispatch({
            type: 'changed_username',
            nextUsername: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        dispatch({
            type: 'changed_password',
            nextPassword: e.target.value,
        })
    }

    return (
        <>
            <div>
                <form className="flex flex-col w-[30vw]" action={handleSubmit}>
                    <label for="username">Username:</label>
                    <input
                        className="border box-border border-black"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="john.smith"
                        value={state.username}
                        onChange={handleUsernameChange}
                    />
                    <label for="password">Password:</label>
                    <input
                        className="border box-border border-black"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password123!"
                        value={state.password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
