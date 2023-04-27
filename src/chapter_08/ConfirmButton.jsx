import React,{useState} from "react";

const ConfirmButton = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "confirmed" : "confirm"}
        </button>
    );
}

export default ConfirmButton;