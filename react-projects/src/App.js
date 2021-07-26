import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import FacebookLogin from './Components/FacebookLoginPage/FacebookLogin';
import Timer from './Components/Timer/Timer';
import TodoList from './Components/ToDoList/TodoList';
import VoteTemplate from './Components/VoteTemplate/VoteTemplate';
import ComponentLifeCycle from './Components/ComponentLifeCycle/ComponentLifeCycle';
import MapIterator from './Components/IterationUsingMap/MapIterator';
import UserLogin from './Login_bootstrap_sass/UserLogin';
import Form from './Components/Forms/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/Hooks/ProductList';
//import ContextProvider from './Components/ContextExample/ContextProvider';
import ContextProvider from './Context_example_priyanka/ContextProvider';

function App() {
  console.log('App component');
  return (
    <div className="App">
      {/* <ContactUs /> */}
      {/*  <FacebookLogin /> */}
      {/* <Timer /> */}
      {/* <TodoList /> */}
      {/* <VoteTemplate />  */}
      {/* <ComponentLifeCycle /> */}
     <MapIterator /> 
      {/* <UserLogin /> */}
      {/* <Form /> */ }
      {/* <ProductList /> */ }
     {/* <ContextProvider /> */}
     {/*<ContextProvider /> */}
    </div>
  );
}

export default App;
