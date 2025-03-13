import { route } from '@react-router/dev/routes'

export default [
    route('/signup', 'routes/authentication/signup.jsx'),
    route('/login', 'routes/authentication/login.jsx'),
    route('/dashboard', 'routes/dashboard/dashboard.jsx'),
    route('*?', 'routes/catchall.jsx'),
]
