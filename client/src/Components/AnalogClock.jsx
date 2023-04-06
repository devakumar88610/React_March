import React, { useEffect, useState } from 'react';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hourHandStyle = {
        transform: `rotate(${(time.getHours() * 30) + (time.getMinutes() / 2)}deg)`
    };

    const minuteHandStyle = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };

    const secondHandStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };

    return (
        <div className="w-64 h-64 border-4 border-gray-800 rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-white rounded-full flex justify-center items-center relative">
                <div className="w-1/12 h-1/2 bg-black absolute transform -translate-y-1/2 left-1/2 top-1/2 rounded-full" style={hourHandStyle}></div>
                <div className="w-1/12 h-3/4 bg-gray-500 absolute transform -translate-y-3/4 left-1/2 top-1/2 rounded-full" style={minuteHandStyle}></div>
                <div className="w-1/24 h-5/6 bg-red-500 absolute transform -translate-y-5/6 left-1/2 top-1/2 rounded-full" style={secondHandStyle}></div>
                <div className="w-1/6 h-1/6 bg-black absolute rounded-full" style={{ zIndex: 1 }}></div>
            </div>
        </div>
    );
};

export default AnalogClock;
