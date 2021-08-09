import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';
import SearchUser from './SearchUser';
import AddUser from './AddUser';
import axios from 'axios';

class MapIterator extends Component {
    state = {
        userData: [],
        searchText: '',
        shouldUserDataUpdate:true
    }

    componentDidMount = () => {
        console.log('component did mount');
        axios.get('https://react-fceb0-default-rtdb.firebaseio.com/users.json')
            .then((userData) => {
                const fetchedUsers = [];
                let id = 0;
                for (let key in userData.data) {
                    id = id + 1;
                    fetchedUsers.push({
                        ...userData.data[key],
                        key: key,
                        userId: id
                    })
                }
                this.setState({userData: fetchedUsers, shouldUserDataUpdate: false});
            })
    }
    shouldUserDataUpdateHandler = () => {
        console.log('shouldUserDataUpdateHandler',this.state.shouldUserDataUpdate);
        this.setState({shouldUserDataUpdate:true});
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',this.state.shouldUserDataUpdate);
        return this.state.shouldUserDataUpdate !== nextState.shouldUserDataUpdate;

    }
    componentDidUpdate() {
        console.log('component did update');
        axios.get('https://react-fceb0-default-rtdb.firebaseio.com/users.json')
            .then(userData => {
                const fetchedUsers = [];
                let id = 0;
                for (let key in userData.data) {
                    id = id + 1;
                    fetchedUsers.push({
                        ...userData.data[key],
                        key: key,
                        userId: id
                    })
                }
                this.setState({ userData: fetchedUsers })
            })
    }

    searchUserHandler = (searchText) => {
        console.log('searchText=', searchText);

        this.setState({ searchText: searchText });
    }

    render() {
        console.log('Map Iterator', this.state.userData);
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <SearchUser searchUser={this.searchUserHandler} />
                <AddUser shouldUserDataUpdateHandler = {this.shouldUserDataUpdateHandler}/>
                <DisplayUsers displayUserData={this.state.userData} searchText={this.state.searchText} />
               
            </div>
        )
    }
}

export default MapIterator;