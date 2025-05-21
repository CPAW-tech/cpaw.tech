import { Link } from 'react-router'
import './navbar.css'

export function NavBar() {
    return (
        <div className={'navbar card'}>
            <div className="linker">
                <Link
                    to={{ pathname: '/' }}
                    prefetch="intent"
                    className={'navelem card'}
                >
                    <strong>CPAW.TECH</strong>
                </Link>
                <nav className={'linksbar'}>
                    <Link
                        to={{ pathname: '/about' }}
                        prefetch="intent"
                        className={'navelem card'}
                    >
                        About
                    </Link>
                    <Link
                        to={{ pathname: '/faq' }}
                        prefetch="intent"
                        className={'navelem card'}
                    >
                        FAQ
                    </Link>

                    <Link
                        to={{ pathname: '/contact' }}
                        prefetch="intent"
                        className={'navelem card'}
                    >
                        Contact
                    </Link>
                    <Link
                        to={{ pathname: '/signup' }}
                        prefetch="intent"
                        className={'navelem card'}
                    >
                        Sign Up
                    </Link>
                </nav>
            </div>
        </div>
    )
}
