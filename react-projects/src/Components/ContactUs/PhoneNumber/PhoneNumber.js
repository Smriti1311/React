import React from 'react';
import './PhoneNumber.css';
//import phoneNumberIcon from '../media/PngItem_3407382.png'

const PhoneNumber = () => {
    return(
        <div className='containerPhoneNumber'>
            <img src='/media/PngItem_3407382.png' width='30px' height='50px' alt='img'></img>
            <h2>PHONE NUMBER</h2>
            <p>234-9876-5400</p>
            <p>888-0123-4567(Toll Free)</p>
        </div>
    )
}

export default PhoneNumber;