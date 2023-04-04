import React, { Component } from 'react'

class UserDetails extends Component {

  render() {

    const { isVisible, close } = this.props;
    if (!isVisible) return null;

    return (
      <>
        {/* <div className={`${!isVisible ? 'block' : 'hidden'} fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}>
          <div className='w-[500px]'>
            <div className='flex justify-center mb-5 cursor-pointer' onClick={close}>
              <AiOutlineClose className='w-8 h-8 text-white p-2 bg-red-500 rounded-full' />
            </div>
            <div className='shadow-lg bg-white rounded-lg p-5 flex'>
              <pre>{JSON.stringify(this.props)}</pre>

              <div className='w-60 h-60'>
                <img src={this.props.user.image} alt="" />
              </div>
              <div>
                <h1>{this.props.user.firstName}</h1>
              </div>
            </div>
          </div>
        </div> */}


        <div className='fixed bg-blue-500 p-10 rounded-2xl shadow-lg'>
          <div className='bg-slate-200 rounded-full overflow-hidden'>
            <img className='w-full h-full hover:scale-125 transition-all duration-300' src={this.props.user.image} alt="" />
          </div>
          <div className='text-center text-white mt-5'>
            <h1 className='text-2xl font-medium'>{this.props.user.firstName} <span>{this.props.user.lastName}</span></h1>
            <p className='uppercase'>{this.props.user.gender}</p>
            <p className='my-5 font-bold'>{this.props.user.birthDate}</p>
            <p className='mt-5'>{this.props.user.email}</p>
          </div>
        </div>
      </>
    )
  }
}

export default UserDetails