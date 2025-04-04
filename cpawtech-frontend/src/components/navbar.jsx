import { Link } from 'react-router'
import './navbar.css'

export function NavBar() {
    return (
        <div className={'navbar'}>
            <Link to={{ pathname: '/about' }}>About</Link>
            <Link to={{ pathname: '/faq' }}>FAQ</Link>
            {/* LOGO? */}
            <Link to={{ pathname: '/contact' }}>Contact</Link>
            <Link to={{ pathname: '/signup' }}>Sign Up</Link>
        </div>
    )
}
