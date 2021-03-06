import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import Tasklist from '../TaskList/TaskList';
import './AddTask.css';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.trans = props.t;
        this.state = {
            taskName: '',
            owner: '',
            taskList: [],
            errorMsg: ''
        }
    }

    inputRef = React.createRef();

    componentDidMount() {
        this.inputRef.current.focus();
    }

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
                        placeholder={this.trans("task") + '..'}
                        ref={this.inputRef}
                        onChange={this.setValue} />
                    <input className='addTaskInput'
                        type='text'
                        name='owner'
                        value={this.state.owner}
                        placeholder={this.trans("owner") + '..'}
                        onChange={this.setValue} />
                    <button className='button'
                        type='submit'
                    >{this.trans("addTask")}</button>
                </form>
                <p style={{ color: 'red', fontSize: '20px' }}>{this.state.errorMsg}</p>
                <Tasklist taskList={this.state.taskList} deleteTask={this.deleteTaskHandler} />
            </div>
        )
    }
}


export default withTranslation()(AddTask);