import React, { Component } from 'react';
import Intermediate from './Intermediate';
export const NameContext = React.createContext();
export const VersionContext = React.createContext();

class ContextProvider extends Component {

    state = {
        name: 'React',
        version: '17.0.2'
    }
    render() {
        return (
            <div className='jumbotron'>
                Context Provider Div
                <br></br>
                <div className='container'>
                    Name: {this.state.name}
                    <br></br>
                    Version: {this.state.version}
                </div>
                <NameContext.Provider value = {this.state.name}>
                    <VersionContext.Provider value = {this.state.version}>
                    <Intermediate />
                    </VersionContext.Provider>
                </NameContext.Provider>
            </div>
        )
    }
}

export default ContextProvider;