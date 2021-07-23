import React, { useContext } from 'react';
import { NameContext, VersionContext } from './ContextProvider';

const ContextConsumerUsingHooks = () => {
    const name = useContext(NameContext);
    const version = useContext(VersionContext);
    return (
        <div>
            Context Consumer Using Hooks
            <br></br>
            <div className='container'>
                Name: {name}
                <br></br>
                Version: {version}
            </div>
        </div>
    )

}

export default ContextConsumerUsingHooks;