import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers';

class MapIterator extends Component {
    state = {
        userData:[]

    }

     componentDidMount = () => {
        fetch('/media/sampleData.json')
        .then((response) => response.json())
        .then((userData)=>{
            console.log(userData.users);
            this.setState({userData:userData.users});
        })
    }

    render() {
       // const[userData] = this.state.userData;
        console.log(this.state.userData);
        return (
            <div className='container'>
                <h1> List of Users</h1>
                <DisplayUsers displayUserData={this.state.userData} />
            </div>

        )
    }
}

export default MapIterator;