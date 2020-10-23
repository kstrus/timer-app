import React, { useState, useEffect } from 'react';

const timerStyles = {
    fontFamily: 'sans-serif',
    width: 400,
    height: 200,
    lineHeight: '200px',
    fontSize: 100,
    border: '1px solid #ccc',
    textAlign: 'center',
    margin: '100px auto'
};

function App() {
    const [ time, setTime ] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1);
        }, 1000);
    });

    return (
        <div style={timerStyles}>{time}</div>
    );
}

export default App;
