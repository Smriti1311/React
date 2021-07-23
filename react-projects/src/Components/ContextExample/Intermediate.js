import React, { Component } from 'react';
import ContextConsumer from './ContextConsumer';
import ContextConsumerUsingHooks from './ContextConsumerUsingHook';

const Intermediate = (props) => {
        return(
            <div>
                Intermedite Div(using props)
                <br></br>
                <div className='container'>
                    Name : {props.name}
                    <br></br>
                    Version: {props.version}
                </div>
                <ContextConsumer />
                <ContextConsumerUsingHooks/>
            </div>
        )
    }

export default Intermediate;