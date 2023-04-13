import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY =10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log('=====================');
        console.log("useEffect() called");
        console.log(`isFull L ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`current count value ${count}`);
    },[count]);

    return (
        <div style={{padding :16}}>
            <p>{`총 ${count} 명 수용`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color : "red" }}>꽉참</p>}
        </div>
    )
}

export default Accommodate;