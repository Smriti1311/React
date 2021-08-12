import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: '',
            errorInfo: ''
        }
    }
    componentDidCatch = (error, errorInfo) => {
        this.setState({
            hasError: true,
            errorInfo: errorInfo
        });
    }

    render() {
        if(this.state.hasError) {
            return <Fragment>
                <h2>Something went wrong</h2>
                <p>{this.state.info.componentStack}</p>
            </Fragment>
        } else {
           return this.props.children;
        }
}
}

export default ErrorBoundary;