import React, { Component } from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "yyh",
        comment: "영현육"
    },
    {
        name: "charizard",
        comment: "리자몽"
    },
    {
        name: "flwkahdgg",
        comment: "meincamf"
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;