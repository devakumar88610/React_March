import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className='bg-purple-600'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='flex justify-between h-20 items-center'>
                        <a href='/' className='text-2xl text-white font-bold cursor-pointer'>React - March</a>
                        <ul className='flex space-x-5 text-white'>
                            <li>
                                <Link to="/" className='hover:opacity-80'>Home</Link>
                            </li>
                            <li>
                                <Link to="props" className='hover:opacity-80'>Props</Link>
                            </li>
                            <li>
                                <Link to="state" className='hover:opacity-80' >State</Link>
                            </li>
                            <li>
                                <Link to="event" className='hover:opacity-80'>Event</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar