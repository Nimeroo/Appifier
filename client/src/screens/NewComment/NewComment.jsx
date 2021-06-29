import React, { useState } from "react";
import { useParams } from "react-router";
import { postComment } from "../../services/comments";

const NewComment = () => {
  const [commentContent, setCommentContent] = useState({
    content: "",
  });

  const { content } = commentContent;

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (formData) => {
    const newComment = await postComment(formData);
    setCommentContent((prevState) => [...prevState, newComment]);
  };

  return (
    <div>
      <h1>New Comment</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(content);
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
