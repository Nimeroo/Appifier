import React, { useState } from "react";
import "./GameComments.css";
import { useParams } from "react-router";
import UserInfo from "../UserInfo/UserInfo";
import { putComment } from "../../services/comments";

const GameComments = ({ user, comments, game }) => {
  const { id } = useParams();

  const [disableStatus, setDisableStatus] = useState(true);
  const [commentContent, setCommentContent] = useState({
    content: "",
    id: id,
    game_id: game.id,
    user_id: user.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (id, formData) => {
    const editComment = await putComment(id, formData);
    setCommentContent((prevState) => [prevState, editComment]);
  };

  return (
    <div className="comments-list">
      {comments.map((comment) => {
        return (
          <div className="comment-div">
            <UserInfo user={user} />

            <div>
              <button
                onClick={() => {
                  setDisableStatus(!disableStatus);
                }}
              >
                Edit
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(id, commentContent);
              }}
            >
              <textarea
                type="text"
                name="content"
                disabled={disableStatus}
                onChange={handleChange}
                className="comment-content"
              >
                {comment.content}
              </textarea>
              {!disableStatus && <button type="submit">Submit</button>}
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default GameComments;
