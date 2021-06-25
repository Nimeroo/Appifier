import Games from "../../components/Games/Games";
import "./GamesHome.css";
import { getGames } from "../../services/games";
import React, { useEffect, useState } from "react";

const GamesHome = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gamelist = await getGames();
      setGames(gamelist);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1 id="motto">SPEAK YOUR GAME.</h1>
      <Games games={games} />
    </div>
  );
};

export default GamesHome;
