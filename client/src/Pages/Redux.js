import React from 'react'
import Message from '../Components/Message'
import Counter from '../Components/Counter'

const Redux = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-10'>
            <Message />
            <Counter />
        </div>
    )
}

export default Redux