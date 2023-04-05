import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Message = () => {
    return (
        <div className='bg-slate-100 w-[350px] shadow-2xl shadow-blue-200 p-6 text-center border border-gray-300 rounded-2xl'>
            <h1 className='mb-5'>Counter</h1>
            <div>
                <span className='flex items-center justify-center gap-4'>
                    <AiFillMinusCircle className='w-6 h-6 text-blue-500 cursor-pointer' />
                    1
                    <AiFillPlusCircle className='w-6 h-6 text-blue-500 cursor-pointer' />
                </span>
            </div>
        </div>
    )
}

export default Message