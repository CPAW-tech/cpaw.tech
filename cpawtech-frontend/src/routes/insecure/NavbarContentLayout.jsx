import { NavBar } from '../../components/navbar.jsx'
import { Outlet } from 'react-router'

export default function NavbarContentLayout() {
    return (
        <div className="grid justify-center content-center grid-rows-[1fr_9fr] w-screen h_screen">
            <NavBar />
            <div className="grid grid-cols-1 grid-rows-1 justify-center content-center w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}
