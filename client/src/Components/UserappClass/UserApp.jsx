import React, { Component } from "react";
import Axios from "axios";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

class UserApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            selectedUser: {},
            showModal: false
        };

    }

    componentDidMount = () => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch((error) => {
                console.log(error);
                alert('Data not Found')
            });
    };

    // Handlers
    handleselectedUser = (user) => {
        this.setState({ selectedUser: user, showModal: true })
    }
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <>
                <div className='container'>
                    {/* <pre>{JSON.stringify(this.state.user)}</pre> */}

                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div className="col-span-2">
                            {
                                Object.keys(this.state.user).length > 0 ? <>
                                    <UserList users={this.state.user.users} open={this.handleselectedUser} />
                                </> : null
                            }
                        </div>
                        <div>
                            {
                                Object.keys(this.state.user).length > 0 ? <>
                                    <UserDetails user={this.state.selectedUser} isVisible={this.handleselectedUser} close={this.handleCloseModal} />

                                </> : null
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserApp;
