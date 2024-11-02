// COMPONENTS
import JokeForm from "../components/jokes/JokeForm";
// ROUTER
import { useHistory } from "react-router-dom";

const AddJoke = function () {
  const history = useHistory();
  const addJokeHandler = (jokeData) => {
    console.log(jokeData);
    history.push("/jokes");
  };

  return <JokeForm onAddJoke={addJokeHandler} />;
};

export default AddJoke;
