import { useUser } from '../../context/user.jsx'

export default function Dashboard() {
    let user = useUser()

    console.log(user)

    return (
        <>
            <h1>Dashboard!</h1>
            <p>Hello {user.username}</p>
            <p>
                You are{' '}
                {user.isNonProfit ? 'a Non-Profit user.' : 'a student user.'}
            </p>
        </>
    )
}
