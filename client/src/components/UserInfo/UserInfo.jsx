import React from "react";
import "./UserInfo.css";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <h4 id="comment-user">{user.username}</h4>
      <img id="comment-pfp" src={user.profile_image_url} />
    </div>
  );
};

export default UserInfo;
