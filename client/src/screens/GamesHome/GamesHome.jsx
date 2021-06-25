import Games from "../../components/Games/Games";
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
      <Games games={games} />
    </div>
  );
};

export default GamesHome;
