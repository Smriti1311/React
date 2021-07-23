import React, { Component } from 'react';
import ContextConsumer from './ContextConsumer';

const Intermediate = (props) => {
        return(
            <div>
                Intermedite Div
                <br></br>
                <div className='container'>
                    Name : {props.name}
                    <br></br>
                    Version: {props.version}
                </div>
                <ContextConsumer />
            </div>
        )
    }

export default Intermediate;