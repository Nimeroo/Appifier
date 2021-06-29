import GameComments from "../../components/GameComments/GameComments";
import GameDetails from "../../components/GameDetails/GameDetails";
import NewComment from "../NewComment/NewComment";
import { getGame } from "../../services/games";
import { React, useState, useEffect } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { getComments } from "../../services/comments";

const GamesComments = (props) => {
  const [comments, setComments] = useState([]);
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getComments();
      setComments(commentList);
    };
    fetchComments();
  }, [id]);

  useEffect(() => {
    const fetchGame = async () => {
      const game = await getGame(id);
      setGame(game);
    };
    fetchGame();
  }, [id]);

  return (
    <div>
      <Switch>
        <Route exact path="/:id">
          <GameDetails game={game} />
          <Link exact to={`/${id}/new-comment`}>
            <button>New Comment</button>
          </Link>
          <GameComments user={props.user} game={game} comments={comments} />
        </Route>
        <Route exact path="/:id/new-comment">
          <NewComment user={props.user} game={game} />
        </Route>
      </Switch>
    </div>
  );
};

export default GamesComments;
