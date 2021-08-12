import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from "../Constants/Constants";

const initialState = {
    count: 0,
    showCounter : true
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREASE:
            console.log(action.payload)
            return{
                ...state,
                count : state.count + action.payload
            }
        case TOGGLE:
            return{
                ...state,
                showCounter : ! state.showCounter
            }
        default:
            return state

        }
}

export default CounterReducer;