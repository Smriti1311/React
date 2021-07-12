import React, { Component } from 'react';
import Tasklist from '../TaskList/TaskList';
import './AddTask.css';

class AddTask extends Component {

    state = {
        taskName: '',
        taskList: [],
        errorMsg:''
    }

    taskNameHandler = (event) => {
        let taskName = event.target.value;
        this.setState({ taskName: taskName,
                            errorMsg:'' });
    }

    addTaskHandler = () => {
       const result =  this.state.taskList.filter((task)=>{
         return(   task===this.state.taskName)
       });
       if(result.length){
           this.setState({errorMsg:'Duplicate Task'}) ;
           return;
       }
        this.setState({
            taskList: [...this.state.taskList, this.state.taskName]
        })
    }

    deleteTaskHandler = (taskToDelete,index) => {
        console.log('deletetaskhandler',index)
        const {taskList} = this.state;
        taskList.splice(index,1);
        this.setState({taskList:taskList})
    }

    clearTaskInputHandler = () => {
        this.setState({taskName:''});
    }

    render() {
        return (
            <div>
                <input className='addTaskInput' type='text' value={this.state.taskName} onChange={this.taskNameHandler} onClick={this.clearTaskInputHandler} />
                <button className='button' onClick={this.addTaskHandler}>Add Task</button>
                <p style={{color:'red',fontSize:'20px'}}>{this.state.errorMsg}</p>
                <Tasklist taskList={this.state.taskList} deleteTask={this.deleteTaskHandler}/>
            </div>
        )
    }
}

export default AddTask;