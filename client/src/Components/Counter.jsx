import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAction, decrementAction } from '../Redux/Counter/counterAction'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => {
        return state
    })
    return (
        <div className='bg-slate-200 w-[350px] shadow-2xl shadow-blue-300 text-center 
        border border-gray-300 rounded-2xl overflow-hidden hover:scale-110 transition-all'>
            <div>
                <div className='overflow-hidden'>
                    <img className='hover:scale-125 transition-all duration-500'
                        src="https://images.macrumors.com/t/Cw1KK3xqdNLaGiwoE4tEk7wIH2Y=/800x0/article-new/2022/05/Beyond-iPhone-13-Feature-2.jpg?lossy" alt="" />
                </div>
                <div className='p-6'>
                    <h1 className='mb-5'>Counter</h1>
                    <span className='flex items-center justify-center gap-2'>
                        <AiFillMinusCircle className='w-6 h-6 text-blue-500 cursor-pointer'
                            onClick={() => { dispatch(decrementAction()) }} />
                        <input type="text" value={counter.counter.counter}
                            className='w-10 text-center border-2 border-slate-300 focus:outline-none' />
                        <AiFillPlusCircle className='w-6 h-6 text-blue-500 cursor-pointer'
                            onClick={() => { dispatch(incrementAction()) }} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Counter