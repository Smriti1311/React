import React, { Component } from 'react';
import './CreateAccount.scss';
import Form from 'react-bootstrap/Form';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

class CreateAccount extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        birthday: {
            day: '',
            month: '',
            year: ''
        }
    }

    setValueHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { firstName, lastName, email, phoneNumber, password, confirmPassword, birthday } = this.state;
        return (
            <div>
                <Form>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='firstName' placeholder='First name' value={firstName} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='lastName' placeholder='Last name' value={lastName} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='email' placeholder='Email' value={email} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='phoneNumber' placeholder='Phone Number' value={phoneNumber} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='password' placeholder='password' value={password} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='confirmPassword' placeholder='confirmPassword' value={confirmPassword} onChange={this.setValueHandler} ></FormControl>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormLabel>Birthday</FormLabel>
                        <DropdownButton title='Birthday' value={birthday.day} onSelect={this.setValueHandler}>
                            <Dropdown.Item title='Jan'>Jan</Dropdown.Item>
                            <Dropdown.Item title='Feb'>Feb</Dropdown.Item>
                            <Dropdown.Item title='Mar'>Mar</Dropdown.Item>
                            <Dropdown.Item title='Apr'>Apr</Dropdown.Item>
                            <Dropdown.Item title='May'>May</Dropdown.Item>
                            <Dropdown.Item title='Jun'>Jun</Dropdown.Item>
                            <Dropdown.Item title='Jul'>Jul</Dropdown.Item>
                            <Dropdown.Item title='Sep'>Sep</Dropdown.Item>
                            <Dropdown.Item title='Oct'>Oct</Dropdown.Item>
                            <Dropdown.Item title='Nov'>Nov</Dropdown.Item>
                            <Dropdown.Item title='Dec'>Dec</Dropdown.Item>
                        </DropdownButton>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Gender</FormLabel>
                        <InputGroup>
                            <InputGroup.Radio aria-label="Radio button for following text input" />
                            <FormControl aria-label="Text input with radio button" />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CreateAccount;