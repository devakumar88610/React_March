import React from 'react'
import PropsDrilling from "../Components/Props/PropsDrillingFun/FunCompA"
import Example from "../Components/Props/PropsClass/ClassCompA"

const Props = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-blue-500 font-medium text-2xl p-6 mb-6 border-b-2'>Props, Class & Functional Component</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <Example />
                </div>
                <div>
                    <PropsDrilling />
                </div>
            </div>
        </div>
    )
}

export default Props