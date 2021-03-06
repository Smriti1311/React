import React, { useState, useRef, useEffect } from 'react';
import CreateAccount from '../CreateAccount/CreateAccount';
import './Login.css';

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('Email address or phone number');
    const [password, setPassword] = useState('Password');
    const [showText, setShowText] = useState(true);
    const [createAccount, setcreateAccount] = useState(false);
    const inputRef = useRef(null);

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

    const createAccountHandler = (event) => {
        setcreateAccount(true);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return (
        <div className='LoginContainer'>
            <form>
                <input className='Input' type='text' ref={inputRef} value={emailOrPhone} onChange={setEmailOrPhoneHandler} onClick={removeDefaultEmailOrPhoneHandler}></input>
                <input className='Input' type={showText ? 'type' : 'password'} value={password} onChange={setPasswordHandler} onClick={removeDefaultPasswordHandler} />
                <button className='Button'>Log In</button>
            </form>
             <a className='Anchor' href='//localhost:3000'> Forgot password?</a>
             <hr style={{color:'lightgrey'}}></hr>
            <div>  <button className='CreateButton mb-3' onClick={createAccountHandler}>Create New Account</button></div>
            {createAccount && <CreateAccount />}
            <p style={{textAlign:'center'}}><strong>Create a Page</strong> for a celebrity, band or business </p>
        </div>
    )

}

export default Login;