import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'

const UserApp = () => {

    const [state, setState] = useState({ user: {} })
    const [selUser, setSelUser] = useState({ selectedUser: {} })

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                setState({ user: response.data })
            })
            .catch()
    }, [1000])

    const handleSelectedUser = (user) => {
        setSelUser({ selectedUser: user })
    }

    return (
        <>
            <div className="container mt-5 ">
                {/* <pre>{JSON.stringify(state.user)}</pre> */}
                <div>
                    {
                        Object.keys(state.user).length > 0 ? <>
                            <UserList users={state.user.users} openUsers={handleSelectedUser} />
                        </> : null
                    }
                </div>
                <div>
                    {
                        Object.keys(state.user).length > 0 ? <>
                            <UserDetails user={selUser.selectedUser} openUsers={handleSelectedUser} />
                        </> : null
                    }
                </div>
            </div>
        </>
    )
}

export default UserApp