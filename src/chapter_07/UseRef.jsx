import React, { useRef } from "react";

function UseRef(props){
    const inputElem = useRef(null);

    const onButtonClick = () => {
        inputElem.current.focus();
    };
    return (
        <>
            <input ref={inputElem} type="text"/>
            <button onClick={onButtonClick}>focus input</button>
        </>
    )
}

export default UseRef;