import React, { Component } from 'react';
import SearchUser from './SearchUser';

class DisplayUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayUserData: '' //Tried to add props.displayUserData here first, but its not working on refreshing browser, coz instead of initial mounting, its re-rendering the components
        }
        console.log('in constructor=', this.state.displayUserData);
    }


    static getDerivedStateFromProps = (props, state) => {
        console.log('get derived state from props');
         if(state.displayUserData !== props.displayUserData && !state.searchText){
             // We are do equality check with state displayUserData with props displayUserData if those are not equal and if there is no search text then we are setting the props.data means this condition will true for the first time only. 
             // unable to put condition on resetting of state here, I dont want to reset state when searching data)
        return {
            displayUserData: props.displayUserData
        }
        }
        //return null;
    }

    searchUserHandler = (searchText) => {
        console.log('searchText=', searchText);
        let displayUser;
        if (searchText) { // We will do filtering if searchText is there otherwise(no searchText) simple assign props.displayUserData data
            displayUser = this.props.displayUserData.filter((userData) => (
                userData.firstName.toLowerCase().includes(searchText) // We should not check for equality here instead of that we will check for like/contains search
            ));
        } else {
            displayUser = this.props.displayUserData;
        }
        console.log('displayUser==', displayUser);
        this.setState({ displayUserData: displayUser, searchText: searchText });
    }

    render() {
        let displayData = '';
        const { displayUserData } = this.state;

        console.log('displayUserData====', displayUserData)
        if (displayUserData) {
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
                    {displayUserData.map((user => (
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
                    )))}
                </tbody>
            </table>
        }
        console.log('displayData=', displayData);
        return (
            <div>
                <SearchUser searchUser={this.searchUserHandler} />
                {displayData}
            </div>
        )
    }
}

export default DisplayUsers;