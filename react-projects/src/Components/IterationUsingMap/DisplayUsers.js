import React, { Component } from 'react';

class DisplayUsers extends Component {
    render() {
        const displayUserData = this.props.displayUserData.map((user) => (
            <tr key={user.userId}>
                <th scope='row'>
                    {user.userId}
                </th>
                <td className='text-capitalize'>
                    {user.firstName}
                </td>
                <td className='text-capitalize'>
                    {user.lastName}
                </td>
                <td>
                    {user.phoneNumber}
                </td>
                <td>
                    {user.emailAddress}
                </td>
            </tr>
        ))

        let displayData = [];
        if (this.props.displayUserData) {

            displayData = <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>
                            Id
                        </th>
                        <th scope='col'>
                            First Name
                        </th>
                        <th scope='col'>
                            Last Name
                        </th>
                        <th scope='col'>
                            Phone Number
                        </th>
                        <th scope='col'>
                            Email Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayUserData}
                </tbody>
            </table>
        }
        return (
            <div>
                {displayData}
            </div>
        )
    }
}

export default DisplayUsers;