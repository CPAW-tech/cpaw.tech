import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import './root.css'
import { UserProvider } from './context/user'

export function Layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>CPAW.TECH</title>
                <Meta />
                <Links />
            </head>
            <body>
                <UserProvider>{children}</UserProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function Root() {
    return <Outlet />
}
