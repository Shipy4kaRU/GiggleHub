// ROUTER
import {
  useParams,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
// REACT
import { Fragment, useEffect } from "react";
//COMPONENTS
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import useHttp from "../hooks/use-http";
import { getJoke } from "../utlis/firebase-api";
import Loader from "../components/UI/Loader";

const JokeDetails = function () {
  const routeMatch = useRouteMatch();

  const {
    sendHttpRequest,
    status,
    data: loadedJoke,
    error,
  } = useHttp(getJoke, true);

  console.log(routeMatch);
  const params = useParams();
  const { jokeId } = params;

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  if (status === "pending")
    return (
      <div className="centered">
        <Loader></Loader>
      </div>
    );

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedJoke.text) {
    return <h1>Joke's not found!</h1>;
  }

  if (!loadedJoke) return <h1 className="centered">Шуток не найдено!</h1>;
  return (
    <Fragment>
      <HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
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
