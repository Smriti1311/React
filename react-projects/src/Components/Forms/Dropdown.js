import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Dropdown = () => {
    const[birthMonth,setBirthMonth] = useState('');
    
   const setValueHandler = (event) => {
       console.log(event.target.value);
        let birthMont = event.target.value;
        console.log(event.target);
        setBirthMonth(birthMont);
    }

    console.log('day==',birthMonth);

    return(
        <div>
            <p class='h1'>Dropdown</p>
            <Form>
                <select className='form-select mr-3' aria-label='BirthMonth' onChange={setValueHandler} name='BirthMonth'>
                    <option value='BirthMonth' selected>BirthMonth</option>
                    <option value='1'>Jan</option>
                    <option value='2'>Feb</option>
                </select>
                <select className='form-select mr-3' aria-label='BirthDay' onChange={setValueHandler} name='BirthDay'>
                    <option value='BirthDay' selected>BirthDay</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </select>
                <select className='form-select' aria-label='BirthYear' onChange={setValueHandler} name='BirthYear'>
                    <option value='BirthYear' selected>BirthYear</option>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                </select>
            </Form>
        </div>
    )
}

export default Dropdown;