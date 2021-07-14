import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import FacebookLogin from './Components/FacebookLoginPage/FacebookLogin';
import Timer from './Components/Timer/Timer';
import TodoList from './Components/ToDoList/TodoList';
import VoteTemplate from './Components/VoteTemplate/VoteTemplate';
import ComponentLifeCycle from './Components/ComponentLifeCycle/ComponentLifeCycle';

function App() {
  return (
    <div className="App">
      {/* <ContactUs /> */}
      {/*  <FacebookLogin /> */}
      {/* <Timer /> */}
      {/* <TodoList /> */}
      {/* <VoteTemplate />  */} 
      <ComponentLifeCycle />
    </div>
  );
}

export default App;
