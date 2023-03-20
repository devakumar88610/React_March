import React from 'react'

const FunCompD = (props) => {
    return (
        <div>
            <h1>Component D</h1>
            <pre>{JSON.stringify(props.name)}</pre>
            <img src={props.img} alt="" />
            <h2>Name: {props.name}</h2>
        </div>
    )
}

export default FunCompD