import React from 'react'
import UserDetails from './UserDetails'
import { useDispatch, useSelector } from 'react-redux'
import { openAction, closeAction } from '../../Redux/HandleClick/handleClickAction'


const UserList = (props) => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.isOpen.isOpen.isOpen);


    const handleOpen = () => {
        dispatch(openAction())
    };

    const handleClose = () => {
        dispatch(closeAction())
    };

    const selectedUser = (user) => {
        props.openUsers(user)
        dispatch(openAction())
        console.log(user);
    };

    return (
        <>
            {isOpen && <UserDetails
                closeModal={handleClose}
                isOpen={handleOpen} />}

            <table className='w-full'>

                <thead className='bg-red-500 h-[50px] text-white text-left'>
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
                            return <tr key={user.id} className='bog bg-slate-100 hover:bg-slate-200 cursor-pointer'
                                onClick={selectedUser.bind(this, user)} >
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