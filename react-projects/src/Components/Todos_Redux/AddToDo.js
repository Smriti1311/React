import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AddTodo} from '../../Actions/ToDoActions';

const AddTodoTask = () => {
    const Todo = useSelector(state => state.ToDo);
    console.log(Todo);
    const dispatch = useDispatch();

    return (
        <>
            <FormControl type='input'
                className='w-25 mx-auto'
                placeholder='Enter Task..'
                value= { Todo.toDoName }
                onChange = {dispatch(AddTodo())} />
            <Button>Add Task</Button>
        </>
    )

}

export default AddTodoTask;