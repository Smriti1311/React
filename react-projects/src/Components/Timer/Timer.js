import './Timer.css';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function Timer() {

  const [date, updateDate] = useState(new Date().toLocaleTimeString());
  const [ showModal,toggleShowModal] = useState(false);

  useEffect(() => {
    setInterval(() => {
      updateDate(new Date().toLocaleTimeString());
    }, 1000)
  }, [])

  return (
    <div className="Timer">
      <div>Time : {date}</div>
      <Button className='mt-3' onClick={()=>{toggleShowModal(true)}}>Click here to check today's date</Button>
      <Modal show={showModal} onHide={()=>toggleShowModal(false)}>
        <Modal.Header closeButton>Today's Date</Modal.Header>
        <Modal.Body> Date : {new Date().toDateString()}</Modal.Body>
        <Modal.Footer>
          <Button className='secondary' onClick={()=>toggleShowModal(false)}> Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Timer;
 