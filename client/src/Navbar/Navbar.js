import React from 'react'
import { Link } from "react-router-dom"
import navLinks from "../data/data"

const Navbar = () => {
    return (
        <>
            <nav className='bg-blue-600 w-full'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className='flex justify-between h-20 items-center'>
                        <a href='/' className='text-2xl text-white font-bold cursor-pointer'>React - March</a>
                        <ul className='flex space-x-5 text-white'>
                            {
                                navLinks.map(({ name, path }, index) => {
                                    return <li key={index} className="lg:block hidden active:">
                                        <Link to={path} className='hover:opacity-80'>{name}</Link>
                                    </li>
                                })
                            }
                        </ul>
                        <button className='bg-white px-4 py-1 font-medium hover:opacity-90'>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar