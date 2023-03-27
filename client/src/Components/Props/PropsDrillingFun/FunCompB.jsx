import React from "react";
import FunCompC from "./FunCompC"

const FunCompB = (props) => {
    return <>
        <h1>Component B</h1>
        <pre >{JSON.stringify(props.name)}</pre>
        <FunCompC img={props.img} name={props.name} />
    </>
}
export default FunCompB