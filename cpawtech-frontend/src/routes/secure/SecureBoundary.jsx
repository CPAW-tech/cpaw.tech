import { useAtom } from 'jotai'
import { isUserAuthenticatedAtom } from '../../atoms/userContextAtoms'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export default function SecureBoundary({ children }) {
    const [isUserAuthenticated] = useAtom(isUserAuthenticatedAtom)
    let navigate = useNavigate()

    useEffect(() => {
        if (!isUserAuthenticated) {
            navigate('/login')
        }
    }, [isUserAuthenticated, navigate])

    return <>{children}</>
}
