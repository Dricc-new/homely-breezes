import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import './styles.css'

export function Header() {
    const [showNav, setShowNav] = useState(true)

    useEffect(() => {
        setShowNav(window.innerWidth > 640)
        window.onresize = () => { setShowNav(window.innerWidth > 640); console.log(window.innerWidth) }
    }, [])
    return <div className='fixed z-40 bg-stone-950 top-0 w-full text-white'>
        <div className='flex items-center z-10 justify-between mx-auto container'>
            <Link to="/"><img className='w-20' src="/logo.svg" alt="" /></Link>
            <div className='relative flex flex-col items-end'>
                <button onClick={() => setShowNav(!showNav)} className='sm:hidden w-6 h-6 text-md'><i className='fas fa-bars' /></button>
                {showNav && <nav className='flex max-sm:absolute max-sm:top-11 max-sm:p-4 max-sm:items-center max-sm:flex-col max-sm:w-screen max-sm:bg-stone-950 max-sm:-right-4 gap-4'>
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to='/rooms' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Rooms</NavLink>
                    <a href="#">About</a>
                    {/* <a href="#">Blog</a> */}
                    <a href="#">Pages</a>
                    <a href="#">Contact</a>
                </nav>}
            </div>
        </div>
    </div>
}