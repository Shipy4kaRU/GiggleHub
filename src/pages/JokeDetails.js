// ROUTER
import { useParams, Route, Link, Switch } from "react-router-dom";
// REACT
import { Fragment } from "react";
//CMPONENTS
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

// DATA (temporary)
import { DUMMY_JOKES } from "./Jokes";

const JokeDetails = function () {
  const params = useParams();
  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!joke) return <h1 className="centered">Шуток не найдено!</h1>;
  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Switch>
        <Route path="/jokes/:jokeId" exact>
          <Link
            className="centered btn--empty"
            to={`/jokes/${params.jokeId}/comments`}
          >
            Show Comments
          </Link>
        </Route>
        <Route path="/jokes/:jokeId/comments">
          <Comments></Comments>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default JokeDetails;
