import { route, layout, index } from '@react-router/dev/routes'

export default [
    layout('routes/insecure/NavbarContentLayout.jsx', [
        index('routes/landing.jsx'),
        route('/about', 'routes/about/about.jsx'),
        route('/faq', 'routes/faq/faq.jsx'),
        route('/contact', 'routes/contact/contact.jsx'),

        route('/signup/:type?', 'routes/authentication/signup.jsx'),
        route('/login', 'routes/authentication/login.jsx'),
    ]),

    layout('routes/secure/SecureBoundary.jsx', [
        route('/dashboard', 'routes/dashboard/dashboard.jsx'),
    ]),

    route('*?', 'routes/catchall.jsx'),
]
