
import './TodoList.css';
import AddTask from './AddTask/AddTask';

function TodoList() {
  return (
    <div className="Header">
     <h1 style={{color:'lavender',textDecoration:'underline'} }>TODO List</h1>
     <AddTask />
    </div>
  );
}

export default TodoList;
