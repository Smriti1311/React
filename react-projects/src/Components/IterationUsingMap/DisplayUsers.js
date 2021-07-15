import React from 'react';

const DisplayUsers = (props) => {
    console.log(props.displayUserData)
    let displayData = '';
    if (props.displayUserData) {
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
                {props.displayUserData.map((user => (
                    <tr  key={user.userId}>
                        <th scope='row'>
                            {user.userId}
                        </th>
                        <td>
                            {user.firstName}
                        </td>
                        <td>
                            {user.lastName}
                        </td>
                        <td>
                            {user.phoneNumber}
                        </td>
                        <td>
                            {user.emailAddress}
                        </td>
                    </tr>
                )))}
            </tbody>
        </table>
    }
    return (
        <div>
            {displayData}
        </div>
    )
}

export default DisplayUsers;