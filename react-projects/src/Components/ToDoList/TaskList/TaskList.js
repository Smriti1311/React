import React from 'react';
import './TaskList.css';

const Tasklist = (props) => {
    return(
        props.taskList.map((task,index)=>(
            <ul className='taskList'>
            <li className='tasklistItem' key={index+task} >
                <span style={{width:'70%'}}>{task}</span>
                <span className='delete' onClick={(task) => props.deleteTask(task,index)}>Delete</span></li>
            </ul>
        ))
    )
}

export default Tasklist;