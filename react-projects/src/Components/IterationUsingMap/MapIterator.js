import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';
import SearchUser from './SearchUser';
import AddUser from './AddUser';
import axios from 'axios';

class MapIterator extends Component {
    state = {
        userData: [],
        searchText: ''
    }

    componentDidMount = () => {
        console.log('component did mount');
        axios.get('https://react-fceb0-default-rtdb.firebaseio.com/users.json')
            .then((userData) => {
                console.log(userData.data);
                if(userData.data){
                this.setState({ userData: userData.data });
                }
            })
    }

    searchUserHandler = (searchText) => {
        console.log('searchText=', searchText);
       
        this.setState({ searchText: searchText });
    }

    render() {
        console.log('Map Iterator');
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <SearchUser searchUser={this.searchUserHandler} />
                <DisplayUsers displayUserData={this.state.userData} searchText={this.state.searchText}/>
                <AddUser />
            </div>
        )
    }
}

export default MapIterator;