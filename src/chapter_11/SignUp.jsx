import React, { useState } from "react";

const SignUp = (props) => {
    const [name, setName] = useState("");
    const [genger, setGender] = useState("M");
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${genger}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name}
                onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                성별 :
                <select value={genger} onChange={handleChangeGender}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;