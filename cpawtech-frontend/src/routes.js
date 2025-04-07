import { route, layout, index } from '@react-router/dev/routes'

export default [
    index('routes/landing.jsx'),
    route('/signup/:type?', 'routes/authentication/signup.jsx'),
    route('/login', 'routes/authentication/login.jsx'),

    layout('routes/secure/SecureBoundary.jsx', [
        route('/dashboard', 'routes/dashboard/dashboard.jsx'),
    ]),

    route('*?', 'routes/catchall.jsx'),
]
