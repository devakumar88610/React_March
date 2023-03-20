import React from "react"
import FunCompB from "./FunCompB"

const FunCompA = () => {

    const img = "https://cdn.siasat.com/wp-content/uploads/2022/06/New-Project-49.jpg"
    const name = "Actor Yash"

    return <>
        <h1>Component A</h1>
        <pre>{JSON.stringify(name)}</pre>
        <FunCompB img={img} name={name} />
    </>
}

export default FunCompA