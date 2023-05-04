import React from "react";

const students = [
    {
        id: 1,
        name: "inje",
    },
    {   
        id: 2,
        name: "steve",
    },
    {
        id: 3,
        name: "bill",
    },
    {
        id: 4,
        name: "jeff",
    },
];

const AttendanceBook = (props) => {
    return(
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;