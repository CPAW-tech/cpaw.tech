import { userAuthAtom } from '../../atoms/userContextAtoms'
import { useAtom } from 'jotai'

export default function Dashboard() {
    const userAuth = useAtom(userAuthAtom)

    return (
        <>
            <h1>Dashboard!</h1>
            <p>{JSON.stringify(userAuth)}</p>
        </>
    )
}
