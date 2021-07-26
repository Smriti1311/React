import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

class AddUser extends Component{
    
    render(){
        console.log(this.props.match);
        return(
            <Nav>
                <Nav.Item>
                    <Nav.Link as={Link} to={`${this.props.match}`}></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default withRouter(AddUser);