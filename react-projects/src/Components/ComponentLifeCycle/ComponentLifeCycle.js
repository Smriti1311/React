import React, { Component } from 'react';

class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React LifeCycle Mount Phase'
        }
        console.log('constructor==', this.state.name)
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log('get derived state from props==', state.name);
        return null;
    }

    componentDidMount = () => {
        this.setState({name:'React Lifecycle Update Phase'},
        console.log('componentDidMount==',this.state.name));
    }



    shouldComponentUpdate = () => {
        console.log('should Component Update=',this.state.name);
        if(this.state.name!=='React Lifecycle Update Phase'){
        return true;
        }
        return false;
    }
    render() {
        const {name} = this.state;
        console.log('render===',name);
     

        return (<div>
            <h1>Component lifecycle</h1>
        </div>)
    }

}

export default ComponentLifeCycle;