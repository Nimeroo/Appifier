import React from "react";
import { Link } from "react-router-dom";

const Games = (props) => {
  return (
    <div>
      {props.games.map((game) => {
        return (
          <div>
            <Link to="/">
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
