import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <h4>{user.username}</h4>
      <img src={user.profile_image_url} />
    </div>
  );
};

export default UserInfo;
