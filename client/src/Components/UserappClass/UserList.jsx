import React, { Component } from 'react'

class UserList extends Component {

    selectedUser = (user) => {
        this.props.open(user)
        console.log(user);
    }

    render() {
        return (
            <>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <table className='w-full border border-slate-300 '>
                    <thead cla className='bg-blue-500 text-white h-10'>
                        <tr className='text-left'>
                            <th className='text-center'>Id</th>
                            <th className='text-center'>Picture</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user) => {
                                return <tr key={user.id}
                                    className='hover:bg-slate-100 cursor-pointer'
                                    onClick={this.selectedUser.bind(this, user)}>

                                    <td className='text-center'>{user.id}</td>
                                    <td className='flex justify-center my-2'><img className='w-8 h-8 bg-slate-200 rounded-full' src={user.image} alt="" /></td>
                                    <td>{user.firstName}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


            </>
        )
    }
}

export default UserList