import { route } from '@react-router/dev/routes'

export default [
    route('/signup', 'routes/authentication/signup.jsx'),
    route('/login', 'routes/authentication/login.jsx'),
    route('*?', 'routes/catchall.jsx'),
]
