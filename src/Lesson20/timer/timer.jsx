import React, { useRef, useState } from "react";
import './timer.css';

const Timer = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    const formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    };

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const resetTimer = () => {
        stopTimer();
        setCount(0);
    };

    return (
        <div className="TimerBox">
            <div className="Timer">
                <h1>Timer: {formatTime(count)}</h1>
                <div className="btns">
                    <button onClick={startTimer}>Start</button>
                    <button onClick={stopTimer}>Stop</button>
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
