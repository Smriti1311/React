import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';
import SearchUser from './SearchUser';
import AddUser from './AddUser'

class MapIterator extends Component {
    state = {
        userData: []
    }

    componentDidMount = () => {
        console.log('component did mount');
        fetch('/media/sampleData.json')
            .then((response) => response.json())
            .then((userData) => {
                this.setState({ userData: userData.users });
            })
    }

    searchUserHandler = (searchText) => {
        console.log('searchText=', searchText);
        let displayUser;
        if (searchText) {
            displayUser = this.state.userData.filter((userData) => (
                userData.firstName.toLowerCase().includes(searchText)
            ));
            this.setState({ userData: displayUser });
        }
    }

    render() {
        console.log('Map Iterator');
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <SearchUser searchUser={this.searchUserHandler} />
                <DisplayUsers displayUserData={this.state.userData} />
                <AddUser />
            </div>
        )
    }
}

export default MapIterator;