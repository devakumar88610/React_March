import React from 'react'
import FunCompD from "./FunCompD"

const FunCompC = (props) => {
    return <>
        <h1>Component C</h1>
        <pre>{JSON.stringify(props.name)}</pre>
        <FunCompD img={props.img} name={props.name} />
    </>

}

export default FunCompC