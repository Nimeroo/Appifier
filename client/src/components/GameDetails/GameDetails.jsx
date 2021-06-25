import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getGame } from "../../services/games";
import "./GameDetails.css";

const GameDetails = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const game = await getGame(id);
      setGame(game);
    };
    fetchGame();
  }, [id]);

  return (
    <div>
      <h1>{game.title}</h1>
      <h3>{game.genre}</h3>
      <h5>{game.platform}</h5>
    </div>
  );
};

export default GameDetails;
