import React, { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { postComment } from "../../services/comments";

const NewComment = ({ user, game }) => {
  const { id } = useParams();
  const history = useHistory();

  console.log(user);

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

    history.push(`/${id}`);
  };

  return (
    <div>
      <h1>New Comment</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(commentContent);
        }}
      >
        <label>
          Add your comment here:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewComment;
