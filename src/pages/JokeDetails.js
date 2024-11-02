// ROUTER
import {
  useParams,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
// REACT
import { Fragment } from "react";
//CMPONENTS
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

// DATA (temporary)
import { DUMMY_JOKES } from "./Jokes";

const JokeDetails = function () {
  const routeMatch = useRouteMatch();

  console.log(routeMatch);
  const params = useParams();
  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!joke) return <h1 className="centered">Шуток не найдено!</h1>;
  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Switch>
        <Route path={routeMatch.path} exact>
          <Link
            className="centered btn--empty"
            to={`/jokes/${params.jokeId}/comments`}
          >
            Show Comments
          </Link>
        </Route>
        <Route path={`${routeMatch.path}/comments`}>
          <Comments></Comments>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default JokeDetails;
