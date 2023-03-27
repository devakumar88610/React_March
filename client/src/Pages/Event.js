import React from 'react'
import EventClass from '../Components/Event/EventClass'
import EventFun from '../Components/Event/EventFun'

const Event = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-blue-500 font-medium text-2xl p-6 mb-6 border-b-2'>Event Handling</h1>
            <div>
                <EventClass />
                <EventFun />
            </div>
        </div>
    )
}

export default Event