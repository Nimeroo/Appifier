import React, { useState } from "react";
import "./NewComment.css";
import { Link, useHistory } from "react-router-dom";
import { postComment } from "../../services/comments";

const NewComment = ({ user, game }) => {
  const history = useHistory();

  const [commentContent, setCommentContent] = useState({
    content: "",
    game_id: game.id,
    user_id: user.id,
  });

  const { content } = commentContent;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (formData) => {
    const newComment = await postComment(formData);
    setCommentContent((prevState) => [prevState, newComment]);
    history.push("/");
  };

  return (
    <div id="main-new-comment-div">
      <h1 id="new-comment-title">New Comment</h1>
      <form
        id="new-comment-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(commentContent);
        }}
      >
        <label>
          Add your comment here:
          <input
            id="new-comment-input"
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button id="submit-button-new" type="submit">
          Submit
        </button>
      </form>
      Go Back
      <Link to={`/${game.id}`}>
        <img
          id="back-arrow"
          src="https://image.flaticon.com/icons/png/512/60/60577.png"
        />
      </Link>
    </div>
  );
};

export default NewComment;
