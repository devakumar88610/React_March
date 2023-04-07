import React from 'react'
import UserDetails from './UserDetails'


const UserList = (props) => {

    return (
        <>
            {/* <pre>{JSON.stringify(props.users)}</pre> */}
            <table className='w-full'>
                <thead className='bg-red-500 h-10 text-white text-left'>
                    <tr>
                        <th className='text-center'>ID</th>
                        <th className='text-center'>Picture</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((user) => {
                            return <tr key={user.id} className='hover:bg-slate-100
                            '>
                                <td className='text-center'>{user.id}</td>
                                <td className='flex justify-center my-2'><img className='w-8 h-8 bg-slate-100 rounded-full' src={user.image} alt="" /></td>
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

export default UserList