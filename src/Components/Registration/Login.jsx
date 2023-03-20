import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Registration from './Registration'


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div className="h-screen flex justify-center items-center">
                <form
                    onSubmit={this.submitHandler}
                    className='w-[350px] bg-slate-100 p-5 rounded-xl shadow-xl'>
                    <h1 className='text-center mb-10 font-medium text-2xl' >Login Now</h1>
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                    <div>
                        <input
                            className='px-3 py-1 mb-5 w-full outline-none'
                            type="text"
                            placeholder='Email'
                            onChange={this.updateHandler}
                            name="email" />
                    </div>
                    <div>
                        <input
                            className='px-3 py-1 mb-5 w-full outline-none'
                            type="text"
                            placeholder='Password'
                            onChange={this.updateHandler}
                            name="password" />
                    </div>
                    <div className='mb-5 text-blue-500'>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <button className='bg-blue-500 text-white px-5 py-1 w-full hover:opacity-90'>Login</button>
                    <div className='text-sm mt-5 text-center'>
                        <p>don't have an account?
                            <Link className='text-blue-500 ml-1'
                                to="/register"
                                element={<Registration />}>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login