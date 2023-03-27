import React, { Component } from 'react'

class EventClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eid: this.props.eid || "12345",
            name: "name",
            price: "20000"
        };
    }

    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="row">
                <h1>Value: {this.state.eid}</h1>
                <div className='flex items-center gap-5 mt-5'>
                    <button name='eid' type="text" className="bg-blue-500 px-3 py-1 text-white" onClick={this.updateHandler.bind(this, "Hello")} >click</button>
                    <button name="name" type="text" className="bg-yellow-500 px-3 py-1 text-white" onClick={this.updateHandler.bind(this, "Come on")} >Click</button>
                    <button name='price' type="text" className="bg-red-500 px-3 py-1 text-white" onClick={this.updateHandler.bind(this, "Let's go")} >Click</button>
                </div>
                <tr>
                    <td >

                    </td>
                    <td >

                    </td>
                    <td >

                    </td>
                </tr>
            </div>
        );
    }
}

export default EventClass