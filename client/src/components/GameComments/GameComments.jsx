import React from "react";
import "./GameComments.css";
import UserInfo from "../UserInfo/UserInfo";

const GameComments = (props) => {
  return (
    <div className="comments-list">
      {props.comments.map((comment) => {
        return (
          <div className="comment-div">
            <UserInfo user={props.user} />
            <h4 className="comment-content">{comment.content}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default GameComments;
