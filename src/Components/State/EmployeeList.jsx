import React, { Component } from 'react'
import { employees } from './data'


class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: employees
        }
    }
    render() {
        return (
            <>
                <table className='table mt-5 w-full'>
                    <thead className='bg-blue-500 text-white text-left h-10'>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee, index) => {
                                return <tr key={index} className="hover:bg-slate-100 h-10">
                                    <td>{employee.id}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default EmployeeList