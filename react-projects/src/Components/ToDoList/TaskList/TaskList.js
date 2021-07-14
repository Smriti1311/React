import React from 'react';
import './TaskList.css';

const Tasklist = (props) => {
    let taskListHeader = '';
    if (props.taskList.length) {
        taskListHeader = <div className='taskList headerTask'>
            <div style={{ display: 'inline-block', width: '30%' }}>Task</div>
            <div style={{ display: 'inline-block', width: '30%' }}>Owner</div>
            <div className='delete'></div>
        </div>;
    }

    const divDisplay = props.taskList.map((task, index) => (
        <div className='taskList' key={index + task.taskName}>
            <div style={{ display: 'inline-block', width: '30%' }}>{task.taskName}</div>
            <div style={{ display: 'inline-block', width: '30%' }}>{task.owner}</div>
            <div className='delete' onClick={(task) => props.deleteTask(task, index)}>Delete</div>
        </div>
    ));

    return (
        <React.Fragment>
            {taskListHeader}
            {divDisplay}
        </React.Fragment>

    )
}

export default Tasklist;