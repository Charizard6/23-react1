import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="파이슨" numOfPage={300}/>
            <Book name="AWS" numOfPage={400}/>
            <Book name="리액트" numOfPage={600}/>
        </div>
    )
}

export default Library;