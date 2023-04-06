import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { msgOneAction, msgTwoAction } from '../Redux/Message/messageAction'

const Message = () => {

    let messages = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()

    const messageOneHandler = () => {
        dispatch(msgOneAction())
    }
    const messageTwoHandler = () => {
        dispatch(msgTwoAction())
    }

    return (
        <div className='bg-slate-100 w-[350px] shadow-2xl shadow-blue-300 p-6 text-center border border-gray-300 rounded-2xl'>
            <h1 className='mb-5'>{messages.messages.message}</h1>
            {/* <pre>{JSON.stringify(messages.messages.message)}</pre> */}
            <div className='flex items-center gap-5'>

                <button
                    onClick={messageOneHandler}
                    className='w-full bg-blue-500 px-3 py-2 font-semibold text-white border-2 
                border-blue-500 hover:bg-white hover:text-black transition-all duration-500'
                >Welcome</button>

                <button
                    onClick={messageTwoHandler}
                    className='w-full bg-red-500 px-3 py-2 font-semibold text-white border-2 
                border-red-500 hover:bg-white hover:text-black transition-all duration-500'
                >Let's start</button>
            </div>
        </div>
    )
}

export default Message