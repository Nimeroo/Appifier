import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";

const Games = (props) => {
  return (
    <div id="game-list">
      {props.games.map((game) => {
        return (
          <Link id="game-div" to={`/${game.id}`}>
            <h2 className="div-labels">{game.title}</h2>
            <h4 className="div-labels">{game.genre}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
