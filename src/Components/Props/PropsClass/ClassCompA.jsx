import React from 'react'
import ClassCompD from "./ClassCompD"

const ClassCompA = () => {
    const childProps = {
        name: "John"
    }
    return (
        <div>
            <ClassCompD {...childProps} />
        </div>
    )
}

export default ClassCompA