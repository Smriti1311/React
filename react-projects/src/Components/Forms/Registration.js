import React, { Component } from 'react';
import './Registration.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Dropdown, DropdownButton, FormCheck, FormText } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import validate from "validate.js";

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            },
            gender: 'female',
            errorMsg: {}
        }

        this.constraints = {
            firstName: {
                presence:{
                    message:'FirstName cannot be blank'},
                length: { minimum: 3 },
                type: "string",
               
            },
            lastName: {
                presence: true,
                length: { minimum: 3 },
                type: "string"
            },
            email:{
                email:true
            },
            password: {
                presence:true,
                length:{
                    minimum: 6,
                    message: 'must be atleast 6 character'
                }
            },
            confirmPassword: {
                equality: "password"
            }
        }
    }

    setValueHandler = (event) => {
        let errorMsg = this.state.errorMsg;
        const key = event.target.name;
        const value = event.target.value;
        let validateResult = this.validateItem(key, value);
        console.log('validate result==', validateResult);
        if (validateResult) {
            errorMsg[key] = validateResult;
        }
        else {
            errorMsg[key] = '';
        }
        console.log('error=',errorMsg);
        this.setState({ [key]: value, errorMsg: errorMsg });
    }

    validateItem = (field, value) => {
        let object = {};
        object[field] = value;
        if(field==='confirmPassword'){
            object['password'] = this.state.password;
        }
        let constraint = this.constraints[field];
        console.log(object);
        console.log(constraint);
        return validate(object, { [field]: constraint });
    }


    setBithdayHandler = (event, eventKey) => {
        console.log(event);
        console.log(eventKey);
        //  const type = event.target.title;
        // const key = event.target.name;
        // const value = event.target.value;
        // const value = type === "radio" || "checkbox" ? event.target.checked :event.target.value;
        //  this.setState({ [key]: value });
    }



    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state);
        if(!this.state.errorMsg){
            console.log('Login Successful',this.state);
        }
        else{
            console.log('Login unSuccessful',this.state.errorMsg);
        }
    }

    render() {
        const { firstName, lastName, email, phoneNumber, password, confirmPassword, birthday, gender, errorMsg } = this.state;
        return (
            <div>
                <Form className=' col-lg-6' onSubmit={this.submitHandler}>
                    <FormGroup className='my-3'>
                        <FormControl className='formGroup' type='input' name='firstName' placeholder='First name' value={firstName} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.firstName && <FormText className="form-text text-muted mt-2">{errorMsg.firstName.firstName.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3 '>
                        <FormControl type='input' name='lastName' placeholder='Last name' value={lastName} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.lastName && <FormText className="form-text text-muted mt-2">{errorMsg.lastName.lastName.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3 '>
                        <FormControl type='input' name='email' placeholder='Email' value={email} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.email && <FormText className="form-text text-muted mt-2">{errorMsg.email.email.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='phoneNumber' placeholder='Phone Number' value={phoneNumber} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.phoneNumber && <FormText className="form-text text-muted mt-2">{errorMsg.phoneNumber.phoneNumber.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='password' placeholder='password' value={password} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.password && <FormText className="form-text text-muted mt-2">{errorMsg.password.password.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormControl type='input' name='confirmPassword' placeholder='confirmPassword' value={confirmPassword} onChange={this.setValueHandler} ></FormControl>
                        {errorMsg.confirmPassword && <FormText className="form-text text-muted mt-2">{errorMsg.confirmPassword.confirmPassword.toString()}</FormText>}
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormLabel>Birthday</FormLabel>
                        <DropdownButton id='birtday' name='birthday' title='Birthday' value={birthday.day} onSelect={this.setBithdayHandler}>
                            <Dropdown.Item eventKey='Janua hh' title='Jan'>Jan</Dropdown.Item>
                            <Dropdown.Item eventKey='Febu' title='Feb'>Feb</Dropdown.Item>
                            <Dropdown.Item eventKey='MArch' title='Mar'>Mar</Dropdown.Item>
                            <Dropdown.Item eventKey='April' title='Apr'>Apr</Dropdown.Item>
                            <Dropdown.Item eventKey='May' title='May'>May</Dropdown.Item>
                            <Dropdown.Item eventKey='June' title='Jun'>Jun</Dropdown.Item>
                            <Dropdown.Item eventKey='July' title='Jul'>Jul</Dropdown.Item>
                            <Dropdown.Item eventKey='September' title='Sep'>Sep</Dropdown.Item>
                            <Dropdown.Item eventKey='October' title='Oct'>Oct</Dropdown.Item>
                            <Dropdown.Item eventKey='November' title='Nov'>Nov</Dropdown.Item>
                            <Dropdown.Item eventKey='December' title='Dec'>Dec</Dropdown.Item>
                        </DropdownButton>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <FormLabel className='mr-3'>Gender</FormLabel>
                        <FormCheck inline className='mb-3 border col-lg-2 radio-inline pl-3' type='radio' name='gender' value='female' onChange={this.setValueHandler} label='Female' checked={gender === 'female'}></FormCheck>
                        <FormCheck inline className='mb-3 border col-lg-2 radio-inline pl-3' type='radio' name='gender' value='male' onChange={this.setValueHandler} label='Male' checked={gender === 'male'}></FormCheck>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CreateAccount;