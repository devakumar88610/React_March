import React, { Component } from "react"
class StateClass extends Component {

    state = {
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
        name: "Iphone 14 Pro",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, sit laboriosam possimus repudiandae quia natus!",
        qty: 1,
        price: 80000,
    }

    decrHandler = () => {
        if (this.state.qty > 1) {
            this.setState({ qty: this.state.qty - 1 })
        }
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }


    render() {
        return <>
            <div>
                <img class="w-full" src={this.state.img} alt="" />
                <div className="p-5 text-center">
                    <h1 className="text-2xl mb-5">{this.state.name}</h1>
                    <p className="mb-5">{this.state.description}</p>
                    <i onClick={this.decrHandler} className="fa-solid fa-circle-minus"></i>
                    <span> {this.state.qty} </span>
                    <i onClick={this.incrHandler} className="fa-solid fa-circle-plus"></i>
                    <p className="mt-5">₹ {this.state.price * this.state.qty}</p>
                </div>
            </div>
        </>
    }
}
export default StateClass   