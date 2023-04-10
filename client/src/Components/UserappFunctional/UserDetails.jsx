import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const UserDetails = ({ user, isOpen, closeModal }) => {

    if (!isOpen) return null;

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}>
            <div div className='w-[400px]' >
                <div className='flex justify-center mb-5 cursor-pointer' >
                    <AiOutlineClose className='w-8 h-8 text-white p-2 bg-red-500 rounded-full'
                        onClick={closeModal} />
                </div>
                <div className='shadow-2xl bg-white rounded-2xl flex overflow-hidden'>
                    <div className='bg-slate-100'>
                        <img className='w-40 h-full object-cover' src={user.image} alt="" />
                    </div>
                    <div className='flex flex-col justify-center p-5 '>
                        <h1 className='font-bold text-lg text-slate-700'>{user.firstName} <span>{user.lastName}</span></h1>
                        <p className='text-slate-500'>{user.gender}</p>
                        <p className='text-slate-500 mt-5'>{user.birthDate}</p>
                        <button className='w-full px-2 py-1 rounded-full bg-blue-500 mt-5 text-white'>{user.domain}</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default UserDetails