import React,{Component} from 'react';
import Address from './../Address/Address';
import PhoneNumber from './../PhoneNumber/PhoneNumber';
import './Description.css';

class Description extends Component{
    render(){
        return(
            <div className='container'>
                <h1>How can we help you?</h1>
                <p className='text'><strong>Ut enim ad minim venism,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </strong> 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <div className='childComponent'>
                 <Address />
                 <PhoneNumber />
                 </div> 
            </div>
        )
    }

}

export default Description;