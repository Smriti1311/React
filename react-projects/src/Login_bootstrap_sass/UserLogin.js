import React,{Component} from 'react';
import Form from  'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import { FormCheck, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';


class UserLogin extends Component {
    state = {
        email : '',
        password : '',
        checkMeOut : '',
        errorMsg : ''
    }

    setValue = event => {
        console.log(event.target);
        let key = event.target.name;
        let value = event.target.value;
        this.setState(event.target.type==='checkbox'?
                    {[key] : !this.state.checkMeOut}:
                    {key:value});
    }

    //,(key,value) => this.validate(key,value)

    validate = (key,value) => {
      //  const { errorMsg} = this.state;
    /*    if(key==='email'){
            if(!value){
                errorMsg[key] = 'Please enter the email address';
            }
        }
       // this.setState({errorMsg});*/
    }

    

    loginSubmitHandler = event => {
        event.preventDefault();
        console.log('Login Successful', this.state);
    }

    render(){
        const {email,password,checkMeOut,errorMsg} = this.state;
        return(
            <div className='container'>
                <div className='jumbotron'>
                    <h1>Please login to Proceed</h1>
                </div>
                <Form onSubmit = {this.loginSubmitHandler}>
                    <FormGroup className='mb-3'>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type='text'
                                      placeholder='Email address'
                                      name='email'
                                      value={email}
                                      onChange={this.setValue}>
                        </FormControl>
                        {/*errorMsg.email?<FormText>{errorMsg.email}</FormText>:
                        <FormText className='text-muted'> We'll never share your email with anyone else.</FormText>*/}
                    </FormGroup>
                  
                    <FormGroup className='mb-3'>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password'
                                      placeholder='Password'
                                      name='password'
                                      value={password}
                                      onChange={this.setValue}>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='mb-3'>
                        <FormCheck type='checkbox'
                                      label='Check me out'
                                      name='checkMeOut'
                                      checked={checkMeOut}
                                      onChange={this.setValue}>
                        </FormCheck>
                    </FormGroup>

                    <Button type='submit' className='btn btn-primary mb-3'>Submit</Button>
                </Form>

            </div>

        )
    }
}

export default UserLogin;