import { ADDTODO } from "../Constants/Constants";

const initialState = {
    toDoName : '',
    toDoList : []
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
       
    
        default:
            return state;
    }
}

export default ToDoReducer;