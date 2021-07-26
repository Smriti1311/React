import './Timer.css';
import React, { useEffect, useState } from 'react';


function Timer() {

  console.log('Timer component');
  const [date, updateDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      updateDate(new Date().toLocaleTimeString());
    }, 1000)
  }, [])

  return (
    <div className="Timer">
      <div>Today's Date:{date}</div>
    </div>
  );
}

export default Timer;
