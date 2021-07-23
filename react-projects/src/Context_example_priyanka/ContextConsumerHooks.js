import React, { useContext } from "react";
import { Ctx } from './ContextProvider';

const ContextConsumer = (props) => {
    const name = useContext(Ctx);

    return (
        <div>
            <h3>I am from context consumer(using useContext hook)</h3>
            {name}
            <hr/>
        </div>
    )
}

export default ContextConsumer;