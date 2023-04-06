import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Message = () => {
    return (
        <div className='bg-slate-100 w-[350px] shadow-2xl shadow-blue-300 text-center border border-gray-300 rounded-2xl overflow-hidden'>

            <div className=''>
                <img className='w-100' src="https://images.macrumors.com/t/wLj3ioBiaEtAl37CLeV-1MId08E=/1600x1200/smart/article-new/2022/11/iPhone-14-Pro-Purple-Side-Perspective-Feature-Purple.jpg" alt="" />
                <div className='p-6'>
                    <h1 className='mb-5'>Counter</h1>
                    <span className='flex items-center justify-center gap-4'>
                        <AiFillMinusCircle className='w-6 h-6 text-blue-500 cursor-pointer' />
                        1
                        <AiFillPlusCircle className='w-6 h-6 text-blue-500 cursor-pointer' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Message