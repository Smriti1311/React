import React, { Component, Fragment } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: '',
        errorInfo: ''
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        console.log(this.state);
        if (this.state.error) {
            return
                <Fragment>
                    <h2>Something went wrong</h2>
                    <p>{this.state.errorInfo.componentStack}</p>
                </Fragment>
        }   else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;