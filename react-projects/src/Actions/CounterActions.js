import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from './../Constants/Constants';

export const CounterIncrement = () => {
    return {
        type: INCREMENT
    }
}

export const CounterDecrement = () => {
    return {
        type: DECREMENT
    }
}

export const CounterIncrease = (payload) => {
    console.log(payload)
    return {
        type: INCREASE,
        payload : payload
    }
}

export const CounterToggle = () => {
    return {
        type: TOGGLE
    }
}