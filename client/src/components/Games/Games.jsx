import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";

const Games = (props) => {
  return (
    <div id="game-list">
      {props.games.map((game) => {
        return (
          <div id="game-div">
            <Link to={`/${game.id}`}>
              <h2>{game.title}</h2>
              <h4>{game.genre}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Games;
