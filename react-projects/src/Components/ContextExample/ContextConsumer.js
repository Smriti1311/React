import React from 'react';
import { NameContext, VersionContext } from './ContextProvider';

const ContextConsumer = () => {
    return (
        <div>
            <NameContext.Consumer>
                {
                    name => {
                        return (
                            <VersionContext.Consumer>
                                {
                                    version => {
                                        return <div>Context Consumer<br></br><div className='container'>Name: {name}<br></br>Version:{version}</div></div>
                                    }
                                }
                            </VersionContext.Consumer>
                        ) 
                    }
                }
            </NameContext.Consumer>
        </div>
    )
}


export default ContextConsumer;