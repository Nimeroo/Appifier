import React, { useState, useEffect } from "react";
import "./GameComments.css";
import { putComment } from "../../services/comments";
import { useParams } from "react-router";
import UserInfo from "../UserInfo/UserInfo";

const GameComments = ({ user, comments, game, handleDelete }) => {
  const { id } = useParams();
  const [disableStatus, setDisableStatus] = useState(true);
  const [commentContent, setCommentContent] = useState({
    id: id,
    content: "",
    game_id: game.id,
    user_id: user.id,
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (id, formData) => {
    setCommentContent({
      id: id,
      content: "",
      game_id: game.id,
      user_id: user.id,
    });
  };

  const prefillFormData = (id) => {
    const commentData = comments.find((comment) => {
      return comment.id === id;
    });
    setCommentContent(commentData);
  };

  return (
    <div className="comments-list">
      {comments.map((comment) => {
        return (
          <div className="comment-div">
            <UserInfo user={user} />

            <div className="buttons-div">
              <button
                id="edit-button"
                className="main-buttons"
                onClick={() => {
                  setDisableStatus(!disableStatus);
                  prefillFormData(comment.id);
                }}
              >
                Edit
              </button>
              <button
                id="delete-button"
                className="main-buttons"
                onClick={() => handleDelete(comment.id)}
              >
                Delete
              </button>
            </div>
            <form
              id="edit-form-container"
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
              {!disableStatus && (
                <button
                  id="submit-button"
                  className="main-buttons"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default GameComments;
