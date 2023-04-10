import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            mobile: "",
            email: "",
            password: ""
        }
    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state);
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <>
                <div className='h-screen flex justify-center items-center'>
                    <form
                        onSubmit={this.submitHandler}
                        className='w-[350px] bg-slate-100 p-5 shadow-lg rounded-xl'>
                        {/* <pre>{JSON.stringify(this.state)}</pre> */}
                        <h1 className='mb-10 text-2xl font-medium text-center'>Create account</h1>
                        <div>
                            <input
                                className='w-full px-3 py-1 mb-5'
                                type="text"
                                placeholder='Full name'
                                name='fullName'
                                onChange={this.updateHandler} />

                        </div>
                        <div>
                            <input
                                className='w-full px-3 py-1 mb-5'
                                type="text"
                                placeholder='Mobile'
                                name='mobile'
                                onChange={this.updateHandler} />
                        </div>
                        <div>
                            <input
                                className='w-full px-3 py-1 mb-5'
                                type="text"
                                placeholder='Email'
                                name='email'
                                onChange={this.updateHandler} />
                        </div>
                        <div>
                            <input
                                className='w-full px-3 py-1 mb-5'
                                type="text"
                                placeholder='Password'
                                name='password' onChange={this.updateHandler}
                            />
                        </div>

                        <div class="flex items-center mb-5">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                class="w-4 h-4 text-blue-500 " />
                            <label for="link-checkbox"
                                class="ml-2 text-sm font-medium">I agree with the
                                <a href="#"
                                    class="text-blue-600 ml-1">terms and conditions</a>
                            </label>
                        </div>

                        <button className='bg-blue-500 px-3 py-1 text-white w-full'>Sign up</button>

                        <div class="text-sm font-medium mt-5 ">
                            <p className='text-center'>already have account?
                                <Link to="/login" element={<Login />}
                                    className='text-blue-500'>
                                    Login
                                </Link></p>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Registration