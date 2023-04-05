import React from 'react'

const Message = () => {
    return (
        <div className='bg-slate-100 w-[350px] shadow-2xl shadow-blue-200 p-6 text-center border border-gray-300 rounded-2xl'>
            <h1 className='mb-5'>Message</h1>
            <div className='flex items-center gap-5'>

                <button
                    className='w-full bg-blue-500 px-3 py-2 font-semibold text-white border-2 
                border-blue-500 hover:bg-white hover:text-black transition-all duration-300'
                >Welcome</button>

                <button
                    className='w-full bg-red-500 px-3 py-2 font-semibold text-white border-2 
                border-red-500 hover:bg-white hover:text-black transition-all duration-300'
                >Let's start</button>
            </div>
        </div>
    )
}

export default Message