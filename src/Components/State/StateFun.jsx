import React, { useState } from "react";


const StateFun = () => {

    const [state, setState] = useState({
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-purple?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1662150036753",
        name: "Iphone 12",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, sit laboriosam possimus repudiandae quia natus!",
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
            <img className="w-full" src={state.img} alt="" />
            <div className="text-center p-5">
                <h1 className="text-2xl mb-5">{state.name}</h1>
                <p className="mb-5">{state.description}</p>
                <i onClick={decrHandler} className="fa-solid fa-circle-minus"></i>
                <span> {state.qty} </span>
                <i onClick={incrHandler} className="fa-solid fa-circle-plus"></i>
                <p className="mt-5">₹ {state.price * state.qty}</p>
            </div>
        </div>
    </>
}

export default StateFun