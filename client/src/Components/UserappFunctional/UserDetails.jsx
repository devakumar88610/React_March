import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const UserDetails = () => {


    return (
        <div className={` fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}>
            <div className='w-[500px]'>
                <div className='flex justify-center mb-5 cursor-pointer' >
                    <AiOutlineClose className='w-8 h-8 text-white p-2 bg-red-500 rounded-full' />
                </div>
                <div className='shadow-lg bg-white rounded-lg p-5 flex'>
                    <pre>{JSON.stringify(this.props)}</pre>

                    <div className='w-60 h-60'>
                        <img src={this.props.user.image} alt="" />
                    </div>
                    <div>
                        <h1>{this.props.user.firstName}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails