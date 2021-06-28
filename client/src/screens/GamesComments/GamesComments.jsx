import GameComments from "../../components/GameComments/GameComments";
import GameDetails from "../../components/GameDetails/GameDetails";
import { React, useState, useEffect } from "react";
import { getComments } from "../../services/comments";

const GamesComments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  return (
    <div>
      <GameDetails />
      <GameComments comments={comments} />
    </div>
  );
};

export default GamesComments;
