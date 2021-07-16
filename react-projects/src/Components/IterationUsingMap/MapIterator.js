import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';

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

    render() {
       // console.log('Map Iterator');
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <DisplayUsers displayUserData={this.state.userData} />
            </div>
        )
    }
}

export default MapIterator;