// COMPONENTS
import JokeForm from "../components/jokes/JokeForm";
import useHttp from "../hooks/use-http";
import { addJoke } from "../utlis/firebase-api";
// ROUTER
import { useHistory } from "react-router-dom";
// REACT
import { useEffect } from "react";

const AddJoke = function () {
  const history = useHistory();
  const { sendHttpRequest, status } = useHttp(addJoke);

  useEffect(() => {
    if (status === "completed") {
      history.push("/jokes");
    }
  }, [status, history]);

  const addJokeHandler = (jokeData) => {
    sendHttpRequest(jokeData);
  };

  return (
    <JokeForm isLoading={status === "pending"} onAddJoke={addJokeHandler} />
  );
};

export default AddJoke;
