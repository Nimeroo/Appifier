import api from "./api-config";

export const getComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post("/games/:game_id/comments", {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { comment: commentData });
  return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
};
