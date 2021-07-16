import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import FacebookLogin from './Components/FacebookLoginPage/FacebookLogin';
import Timer from './Components/Timer/Timer';
import TodoList from './Components/ToDoList/TodoList';
import VoteTemplate from './Components/VoteTemplate/VoteTemplate';
import ComponentLifeCycle from './Components/ComponentLifeCycle/ComponentLifeCycle';
import MapIterator from './Components/IterationUsingMap/MapIterator';

function App() {
  console.log('App component');
  return (
    <div className="App">
      {/* <ContactUs /> */}
      {/* <FacebookLogin /> */}
      {/* <Timer /> */}
      {/* <TodoList /> */}
      {/* <VoteTemplate />  */}
      {/* <ComponentLifeCycle /> */}
      { <MapIterator /> }
    </div>
  );
}

export default App;
