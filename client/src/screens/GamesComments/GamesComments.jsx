import GameComments from "../../components/GameComments/GameComments";
import GameDetails from "../../components/GameDetails/GameDetails";
import NewComment from "../NewComment/NewComment";
import { React, useState, useEffect } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { getComments } from "../../services/comments";

const GamesComments = (props) => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/:id">
          <GameDetails />
          <Link exact to={`/${id}/new-comment`}>
            <button>New Comment</button>
          </Link>
          <GameComments comments={comments} />
        </Route>
        <Route exact path="/:id/new-comment">
          <NewComment />
        </Route>
      </Switch>
    </div>
  );
};

export default GamesComments;
