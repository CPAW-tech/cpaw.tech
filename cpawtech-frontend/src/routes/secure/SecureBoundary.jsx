import { useAtom } from 'jotai'
import { isUserAuthenticatedAtom } from '../../atoms/userContextAtoms'
import { useNavigate } from 'react-router'

export default function SecureBoundary({ children }) {
    const isUserAuthenticated = useAtom(isUserAuthenticatedAtom)
    let navigate = useNavigate()

    console.log(isUserAuthenticated)

    if (!isUserAuthenticated) {
        console.log('A')
        navigate('/login')
    }

    return children
}
