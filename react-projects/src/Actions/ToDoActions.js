import { ADDTODO } from '../Constants/Constants';

export const AddTodo = ( TodoName) => {
 return {
     type : ADDTODO,
     toDoName : TodoName
 }
}

