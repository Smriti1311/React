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
        this.setState({ name: 'React Lifecycle Update Phase' },
            console.log('componentDidMount==', this.state.name));
    }



    shouldComponentUpdate = () => {
        console.log('should Component Update=', this.state.name);
        if (this.state.name !== 'React Lifecycle Update Phase') {
            console.log('inside shouldcomponentupdate');
            return true;
        }
        console.log('should Component Update=', this.state.name);
        return true;
    }

    getSnapshotBeforeUpdate = () => {
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate = () => {
        console.log('component Did Update==', this.state.name);
    }

    componentWillUnmount = () => {
        console.log('component will unmount');
    }

    render() {
        const { name } = this.state;
        console.log('render===', name);


        return (<div>
            <h1>Component lifecycle</h1>
        </div>)
    }

}

export default ComponentLifeCycle;