import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import FacebookLogin from './Components/FacebookLoginPage/FacebookLogin';
import Timer from './Components/Timer/Timer';
//import MapIterator from './Components/IterationUsingMap/MapIterator';
import TodoList from './Components/ToDoList/TodoList';
import VoteTemplate from './Components/VoteTemplate/VoteTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ProductList from './Components/Hooks/ProductList';
import HomeComponent from './Components/Home/Home';
//import ContextProvider from './Components/ContextExample/ContextProvider';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ReactTopics from './Components/ReactTopics/ReactTopics';
import VotingDone from './Components/VoteTemplate/VotingElegibility/VotingDone';
import Counter from './Components/Counter/Counter';
import AddTodo from './Components/Todos_Redux/AddToDo';

function App() {
  return (
    <div className="App">
      <Navbar >
        <Container>
          <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className='me-auto '>
              <Nav.Link as={Link} to='/timer'>Timer</Nav.Link>
              <Nav.Link as={Link} to='/contact-us'>Contact-Us</Nav.Link>
              <NavDropdown title='Actions'>
                <NavDropdown.Item as={Link} to='/vote-template'>VoteTemplate</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='todolist'>To Do List</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to='Counter'>Counter</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to='todo-redux'>To Do Redux</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='facebookLogin'>FaceBook Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='react-topics'>React Topics</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/timer' component={Timer} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/vote-template' component={VoteTemplate} />
        <Route exact path='/todo-redux' component={AddTodo} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/todolist' component={TodoList} />
        <Route exact path='/facebookLogin' component={FacebookLogin} />
        <Route path='/react-topics' component={ReactTopics} />
        <Route exact path='/votingDone' component={VotingDone} />
        <Route path='/*' render={() => (<h2 className='text-center'>Component not defined</h2>)} />
      </Switch>
    </div>
  );
}

export default App;
