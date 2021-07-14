import React, { Component } from 'react';
import Tasklist from '../TaskList/TaskList';
import './AddTask.css';

class AddTask extends Component {

    state = {
        taskName: '',
        owner: '',
        taskList: [],
        errorMsg: ''
    }

    /*  taskNameHandler = (event) => {
          let taskName = event.target.value;
          this.setState({
              taskName: taskName,
              errorMsg: ''
          });
      }
  
      ownerNameHandler = (event) => {
          let ownerName = event.target.value;
          this.setState({ ownerName: ownerName });
      } */

    setValue = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addTaskHandler = (event) => {
        event.preventDefault();
        if (!this.state.taskName) {
            this.setState({ errorMsg: 'Please enter the Task' })
            return;
        }
        const result = this.state.taskList.filter((task) => {
            return (task.taskName === this.state.taskName)
        });
        if (result.length) {
            this.setState({ errorMsg: 'Duplicate Task' });
            return;
        }
        this.state.taskList.push({
            taskName: this.state.taskName,
            owner: this.state.owner
        });
        this.setState({
            taskName: '',
            owner: ''
        });
    }

    deleteTaskHandler = (taskToDelete, index) => {
        console.log('deletetaskhandler', index)
        const { taskList } = this.state;
        taskList.splice(index, 1);
        this.setState({ taskList: taskList })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTaskHandler}>
                    <input className='addTaskInput'
                        type='text'
                        name='taskName'
                        value={this.state.taskName}
                        placeholder={'Task..'}
                        onChange={this.setValue} />
                    <input className='addTaskInput'
                        type='text'
                        name='owner'
                        value={this.state.owner}
                        placeholder={'Owner..'}
                        onChange={this.setValue} />
                    <button className='button'
                        type='submit'
                    >Add Task</button>
                </form>
                <p style={{ color: 'red', fontSize: '20px' }}>{this.state.errorMsg}</p>
                <Tasklist taskList={this.state.taskList} deleteTask={this.deleteTaskHandler} />
            </div>
        )
    }
}


export default AddTask;