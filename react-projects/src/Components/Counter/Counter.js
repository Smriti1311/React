import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CounterDecrement, CounterIncrement, CounterIncrease, CounterToggle } from '../../Actions/CounterActions';

class Counter extends Component {
    state = {
        payload : 10
    }
    render() {
        return (
            <div className='text-center'>
                <h1>Counter</h1>
                {this.props.counter.showCounter &&
                <div>{this.props.counter.count}</div>}
                <Button className='m-4' onClick={this.props.Decrement}>Decrement</Button>
                <Button className='m-4' onClick={this.props.Increment}>Increment</Button>
                <Button onClick={this.props.Increase}>Increase by 10 </Button>
                <div>
                    <Button className='m-4' onClick={this.props.Toggle}>
                        Toggle Counter
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.Counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Increment: () => dispatch(CounterIncrement()),
        Decrement: () => dispatch(CounterDecrement()),
        Increase: (this.state.payload) => dispatch(CounterIncrease( payload )),
        Toggle: () => dispatch(CounterToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);