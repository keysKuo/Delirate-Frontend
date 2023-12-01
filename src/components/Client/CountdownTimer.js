import React, { useState, useEffect } from 'react';
import '../../assets/timer.css'; // Import your CSS file or define inline styles

function CountdownTimer({ initialMinutes, initialSeconds }) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="countdown-timer">
      <div className="countdown-box">
        <div className="countdown-minutes d-inline-block">{minutes.toString().padStart(2, '0')}</div>
        <span style={{ color: 'crimson'}}> : </span>
        <div className="countdown-seconds d-inline-block">{seconds.toString().padStart(2, '0')}</div>
      </div>
      
    </div>
  );
}

export default CountdownTimer;
