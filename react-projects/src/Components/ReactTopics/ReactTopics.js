import {React} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import ComponentLifeCycle from './../ComponentLifeCycle/ComponentLifeCycle';

const ReactTopics = () => {
    const history = useHistory();
    const pathHist = history.location.pathname;
     const {path, url} = useRouteMatch();
    console.log(history,'path=',path,'url=',url,'pathname=',pathHist);
    return (
        <div>
            <h1 className='text-center'>React Topics</h1>
            <Navbar>
                <Container>
                    <Nav className='flex-column'>
                        <Nav.Link as={Link} to={`${pathHist}/componentLifeCycle`}> Component LifeCycle</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <Switch>
                <Route  path={`${pathHist}/componentLifeCycle`} component={ComponentLifeCycle}/>
            </Switch>
           {/* {<ComponentLifeCycle />}
            { < MapIterator />}
            {<UserLogin />}
            {<Form />}
            {<ProductList />}
            {<ContextProvider />}
    {<ContextProvider />} */}
        </div>
    )
}

export default ReactTopics;