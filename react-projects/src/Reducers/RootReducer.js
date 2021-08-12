import { combineReducers } from 'redux';

import CounterReducer from './CounterReducer';
import ToDoReducer from './ToDoReducer';

const RootReducer = combineReducers({
    Counter : CounterReducer,
    ToDo : ToDoReducer
})

export default RootReducer;
