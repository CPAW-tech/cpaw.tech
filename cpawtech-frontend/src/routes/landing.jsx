import { NavBar } from '../components/navbar.jsx'
import '../styles/landing.css'

import { useNavigate } from 'react-router'

export default function Landing() {
    let navigate = useNavigate()

    return (
        <>
            <div className="content">
                <NavBar />
                <div className="organizer">
                    <div className="buttonContent">
                        <div className="titleCenterer">
                            <h1>Students</h1>
                        </div>
                        <div className="buttonSplit">
                            <button onClick={() => navigate('/login')}>
                                Log In
                            </button>
                            <button onClick={() => navigate('/signup/student')}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="buttonContent">
                        <div className="titleCenterer">
                            <h1>Nonprofit Representatives</h1>
                        </div>
                        <div className="buttonSplit">
                            <button onClick={() => navigate('/login')}>
                                Log In
                            </button>
                            <button
                                onClick={() => navigate('/signup/nonprofit')}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
