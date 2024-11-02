//COMPONENTS
import { useEffect } from "react";
import JokeList from "../components/jokes/JokeList";
import useHttp from "../hooks/use-http";
import { getJokes } from "../utlis/firebase-api";
import NotFound from "./NotFound";
import Loader from "../components/UI/Loader";

const Jokes = function () {
  const {
    sendHttpRequest,
    status,
    data: loadedJokes,
    error,
  } = useHttp(getJokes, true);

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);

  if (status === "pending")
    return (
      <div className="centered">
        <Loader />
      </div>
    );

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedJokes || loadedJokes.length === 0)) {
    return <NotFound />;
  }

  return <JokeList jokes={loadedJokes}></JokeList>;
};

export default Jokes;
