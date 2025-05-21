import { NavBar } from '../components/navbar.jsx'
import '../styles/landing.css'

import { useNavigate } from 'react-router'

export default function Landing() {
    let navigate = useNavigate()

    return (
        <div className="flex flex-row justify-around content-center items-center gap-2">
            <div
                id="studentCard"
                className="grid grid-cols-1 grid-rows-2 border border-solid border-black h-[40vh] w-[40vw]"
            >
                <div
                    id="studentHeader"
                    className="grid justify-center content-center"
                >
                    <h1 className="text-xl font-bold mb-1">Students</h1>
                </div>
                <div
                    id="studentLinks"
                    className="flex flex-row justify-between content-center gap-1"
                >
                    <button
                        className="border border-solid border-black p-4 w-9/12"
                        onClick={() => navigate('/login')}
                    >
                        Log In
                    </button>
                    <button
                        className="border border-solid border-black p-4 w-9/12"
                        onClick={() => navigate('/signup/student')}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <div
                id="nonprofitCard"
                className="grid grid-cols-1 grid-rows-2 border border-solid border-black h-[40vh] w-[40vw]"
            >
                <div className="grid justify-center content-center">
                    <h1 className="text-xl font-bold mb-1">
                        Nonprofit Representatives
                    </h1>
                </div>
                <div className="flex flex-row justify-between content-center gap-1">
                    <button
                        className="border border-solid border-black p-4 w-9/12"
                        onClick={() => navigate('/login')}
                    >
                        Log In
                    </button>
                    <button
                        className="border border-solid border-black p-4 w-9/12"
                        onClick={() => navigate('/signup/nonprofit')}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}
