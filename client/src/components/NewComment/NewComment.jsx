import React from "react";

const GameComments = (props) => {
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <div>
            <h4>{comment.content}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default GameComments;
