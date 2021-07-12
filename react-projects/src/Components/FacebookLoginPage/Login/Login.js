import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('Email address or phone number');
    const [password, setPassword] = useState('Password');
    const [showText, setShowText] = useState('true')

    const setEmailOrPhoneHandler = (event) => {
        setEmailOrPhone(event.target.value);
    }

    const removeDefaultEmailOrPhoneHandler = () => {
        setEmailOrPhone('');
    }

    const removeDefaultPasswordHandler = () => {
        setPassword('');
    }

    const setPasswordHandler = (event) => {
        setPassword(event.target.value);
        setShowText(false);
    }

    return (
        <div className='LoginContainer'>
            <form>
                <input className='Input' type='text' value={emailOrPhone} onChange={setEmailOrPhoneHandler} onClick={removeDefaultEmailOrPhoneHandler}></input>
                <input className='Input' type={showText ? 'type' : 'password'} value={password} onChange={setPasswordHandler} onClick={removeDefaultPasswordHandler} />
                <button className='Button'>Log In</button>
            </form>
             <a className='Anchor' href='//localhost:3000'> Forgot password?</a>
             <hr style={{color:'lightgrey'}}></hr>
            <div>  <button className='CreateButton'>Create New Account</button></div>
            <p style={{textAlign:'center'}}><strong>Create a Page</strong> for a celebrity, band or business </p>
        </div>
    )

}

export default Login;