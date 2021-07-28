import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import AddUserData from './AddUserData';

class AddUser extends Component {

    render() {
        console.log(this.props.match.path);
        return (
            <div>
                <Nav>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${this.props.match.path}/addUser`}>Add User</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    <Route path={`${this.props.match.path}/addUser`} component={AddUserData}/>
                </Switch>
            </div>

        )
    }
}

export default withRouter(AddUser);