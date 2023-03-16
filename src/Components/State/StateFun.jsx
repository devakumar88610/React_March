import React, { useState } from "react";


const StateFun = () => {

    const [state, setState] = useState({
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-purple?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1662150036753",
        name: "Iphone 12",
        qty: 1,
        price: 45000,
    })

    const decrHandler = () => {
        if (state.qty > 1) {
            setState({ ...state, qty: state.qty - 1 })
        }
    }
    const incrHandler = () => {
        setState({ ...state, qty: state.qty + 1 })
    }

    return <>
        <div>
            <img src={state.img} alt="" />
            <div className="text-center">
                <h1 className="text-2xl">{state.name}</h1>
                <i onClick={decrHandler} className="fa-solid fa-circle-minus"></i>
                <span> {state.qty} </span>
                <i onClick={incrHandler} className="fa-solid fa-circle-plus"></i>
                <p>{state.price * state.qty}</p>
            </div>
        </div>
    </>
}

export default StateFun