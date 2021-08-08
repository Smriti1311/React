import React, { useEffect, useRef } from 'react';

const HomeComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const  buttonClickHandler = () => {
        alert(inputRef.current.value);
    }

    return (
        <h1 className='text-center'>
            Home Component
            <br />
            <input type='text' ref={inputRef} />
            <button onClick={buttonClickHandler}>Click</button>
        </h1>
    )
}

export default HomeComponent;