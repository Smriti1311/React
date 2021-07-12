import React from 'react';
import FacebookLogo from './FacebookLogo/FacebookLogo';
import Login from './Login/Login';
import './FacebookLogin.css';

const FacebookLogin = () => {
    return(
        <div className='AppContainer'>
        <FacebookLogo />
        <Login />
        </div>
    )
}

export default FacebookLogin;