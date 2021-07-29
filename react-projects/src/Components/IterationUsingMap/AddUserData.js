import React, { Component } from 'react';
import { FormControl, FormGroup, FormLabel, Form, Row, Button } from 'react-bootstrap';
import axios from 'axios';

class AddUserData extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }

      setValueHandler = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({ [key]: value });
    }

    submitDataHandler = (event) => {
        event.preventDefault();
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }
        console.log(userData);
        axios.post('https://react-fceb0-default-rtdb.firebaseio.com/users.json',userData)
        .then(res => {
            console.log(res)
        })
            this.props.hideModal();
    }

    render() {
        const {firstName, lastName, email, phoneNumber} = this.state;
        return (
            <Form onSubmit={this.submitDataHandler}>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>First Name</FormLabel>
                    <FormControl name='firstName' type='input' value={firstName} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl name='lastName' type='input' value={lastName} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl name='email' type='input' value={email} onChange={this.setValueHandler} />
                </FormGroup>
                <FormGroup as={Row} className="mb-3">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl name='phoneNumber' type='input' value={phoneNumber} onChange={this.setValueHandler} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>

        )
    }
}

export default AddUserData;