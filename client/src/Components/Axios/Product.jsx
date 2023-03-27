import React, { Component } from 'react'
import Axios from "axios"

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                products: []
            }
        };
    }

    componentDidMount() {
        Axios.get("https://dummyjson.com/products")
            .then((response) => {
                this.setState({ product: response.data })
            })
            .catch((err) => {
                console.log(err);
                alert("data not found")
            })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-lg:grid-cols-3 mt-10">
                        {
                            this.state.product.products.map((prod, index) => {
                                return <div key={index}>
                                    <div className='bg-slate-100 p-3 rounded-xl justify-center border border-blue-300'>
                                        <img className='h-60 object-cover overflow-hidden w-full' src={prod.thumbnail} alt="" />
                                        <div className=''>
                                            <h1 className='mt-2 text-center text-lg text-slate-800'>{prod.title}</h1>
                                            <h3 className=' my-2 text-center text-md text-slate-800'>₹ {prod.price}</h3>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <button className='px-3 py-2 border border-blue-500  text-slate-800 text-sm'>Add to Cart</button>
                                                <button className='px-3 py-2 bg-blue-500 text-white text-sm'>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Product