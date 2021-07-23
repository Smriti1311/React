import React, { useContext } from "react";
import { Ctx } from './ContextProvider';

const ContextConsumer = (props) => {

    return (
        <div>
            <h3>I am from context consumer(using class consumer)</h3>
            { <Ctx.Consumer>
                {
                    name => {
                             return (  
                                     <div>the context value is {name}</div> 
                                    )
                            }
                }
            </Ctx.Consumer> }
            <hr/>
        </div>
    )
}

export default ContextConsumer;