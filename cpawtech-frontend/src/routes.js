import { route } from '@react-router/dev/routes'

export default [
    route('/signup', 'routes/authentication/signup.jsx'),
    route('*?', 'routes/catchall.jsx'),
]
