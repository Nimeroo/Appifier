import React, { useState } from "react";
import "./GameComments.css";
import UserInfo from "../UserInfo/UserInfo";

const GameComments = (props) => {
  const [disableStatus, setDisableStatus] = useState(true);
  const [edit, setEdit] = useState("Edit");

  return (
    <div className="comments-list">
      {props.comments.map((comment) => {
        return (
          <div className="comment-div">
            <UserInfo user={props.user} />
            <div>
              <button
                onClick={() => {
                  setDisableStatus(!disableStatus);
                  if (disableStatus == true) {
                    setEdit("Submit");
                  } else {
                    setEdit("Edit");
                  }
                }}
              >
                {edit}
              </button>
            </div>
            <textarea disabled={disableStatus} className="comment-content">
              {comment.content}
            </textarea>
          </div>
        );
      })}
    </div>
  );
};

export default GameComments;
