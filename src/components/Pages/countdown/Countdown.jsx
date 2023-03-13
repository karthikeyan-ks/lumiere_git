import React, { useState, useEffect } from 'react';
import './Countdown.css'

function Countdown() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdownDate = new Date('2023-04-18T00:00:00Z').getTime();

         const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
            let hours = new Date(distance).toLocaleString('en-US', { hour: 'numeric', hour12: false, minimumIntegerDigits: 2 });
            let minutes = new Date(distance).toLocaleString('en-US', { minute: 'numeric', minimumIntegerDigits: 2 });
            let seconds = new Date(distance).toLocaleString('en-US', { second: 'numeric', minimumIntegerDigits: 2 });

            if(days.length < 2)
                days = "0"+days
            if(hours.length < 2)
                hours = "0"+hours
            if(seconds.length < 2)
                seconds = "0"+seconds
            if(minutes.length < 2)
                minutes = "0"+minutes
            if(seconds.length < 2)
                seconds = "0"+seconds

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='countdown'>
            <div className="countdown-box-container">
                <div className='countdown-box'>
                    <p className='countdown-numbers'>{countdown.days}</p>
                    <p className='countdown-label'>days</p>
                </div>
                
                <div className='countdown-box'>
                    <p className='countdown-numbers'>{countdown.hours}</p>
                    <p className='countdown-label'>hours</p>
                </div>
                
                <div className='countdown-box'>
                    <p className='countdown-numbers'>{countdown.minutes}</p>
                    <p className='countdown-label'>minutes</p>
                </div>
                
                <div className='countdown-box'>
                    <p className='countdown-numbers'>{countdown.seconds}</p>
                    <p className='countdown-label'>seconds</p>
                </div>
                
            </div>
        </div>
    );
}

export default Countdown;