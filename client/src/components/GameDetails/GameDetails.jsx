import React, { useState, useEffect } from "react";
import "./GameDetails.css";

const GameDetails = (props) => {
  return (
    <div id="game-details-container">
      <h1 className="game-details" id="title">
        {props.game.title}
      </h1>
      <h3 className="game-details" id="genre">
        {props.game.genre}
      </h3>
      <h5 className="game-details" id="platform">
        {props.game.platform}
      </h5>
    </div>
  );
};

export default GameDetails;
