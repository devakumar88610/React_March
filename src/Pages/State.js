import React from 'react'
import EmployeeList from '../Components/State/EmployeeList'
import StateClass from '../Components/State/StateClass'
import StateFun from '../Components/State/StateFun'

const State = () => {
    return (
        <div className='container '>
            <h1 className='text-center text-blue-500 font-medium text-2xl p-6 mb-6 border-b-2'>Product with State Management</h1>
            <div className='grid grid-cols-2 space-x-4 '>

                {/* Class Component */}
                <div className='shadow-lg rounded-2xl overflow-hidden bg-white '>
                    <h1 className='bg-blue-500 text-center text-white p-2'>Class Component</h1>
                    <StateClass />
                </div>

                {/* Functional Component */}
                <div className='shadow-lg rounded-2xl overflow-hidden bg-white'>
                    <h1 className='bg-blue-500 text-center text-white p-2'>Functional Component</h1>
                    <StateFun />
                </div>
            </div>

            {/* Employee List Rendering */}
            <div className='bg-white'>
                <EmployeeList />
            </div>
        </div>
    )
}

export default State