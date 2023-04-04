import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'

const UserApp = () => {

    const [state, setState] = useState({ user: {} })

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                setState({ user: response.data })
            })
            .catch()
    })



    return (
        <>
            <div className="container mt-5">
                {/* <pre>{JSON.stringify(state.user)}</pre> */}

                <div>
                    {
                        Object.keys(state.user).length > 0 ? <>
                            <UserList users={state.user.users} />
                        </> : null
                    }
                </div>
            </div>
        </>
    )
}

export default UserApp