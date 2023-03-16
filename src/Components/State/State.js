import React from 'react'
import StateClass from './StateClass'
import StateFun from './StateFun'

const State = () => {
    return (
        <div className='container '>
            <h1 className='text-center text-blue-500 font-medium text-2xl p-6 mb-6 border-b-2'>Product with State Management</h1>
            <div className='grid grid-cols-2 space-x-4'>
                <div className='shadow-lg rounded-2xl overflow-hidden'>
                    <h1 className='bg-blue-500 text-center text-white p-2'>Class Component</h1>
                    <StateClass />
                </div>
                <div className='shadow-lg rounded-2xl overflow-hidden'>
                    <h1 className='bg-blue-500 text-center text-white p-2'>Functional Component</h1>
                    <StateFun />
                </div>
            </div>
        </div>
    )
}

export default State