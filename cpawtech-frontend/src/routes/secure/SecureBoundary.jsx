import { atom, useAtom } from 'jotai'
import { isUserAuthenticatedAtom } from '../../atoms/userContextAtoms'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Outlet } from 'react-router'

const loadingAtom = atom(true)

export default function SecureBoundary() {
    const [isUserAuthenticated] = useAtom(isUserAuthenticatedAtom)
    const [loading, setLoading] = useAtom(loadingAtom)

    console.log('Secure')

    let navigate = useNavigate()

    useEffect(() => {
        if (!isUserAuthenticated) {
            navigate('/login')
        } else {
            setLoading(false)
        }
    }, [isUserAuthenticated, navigate, setLoading])

    if (loading) {
        return <></>
    } else {
        return <Outlet />
    }
}
