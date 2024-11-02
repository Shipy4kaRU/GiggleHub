import { Route, Redirect, Switch } from "react-router-dom";
import { Fragment } from "react";
// COMPONENTS
import Header from "./components/layout/Header";
import Jokes from "./pages/Jokes";
import AddJoke from "./pages/AddJoke";
import JokeDetails from "./pages/JokeDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jokes" />
        </Route>
        <Route path="/jokes" exact>
          <Jokes></Jokes>
        </Route>
        <Route path="/jokes/:jokeId">
          <JokeDetails></JokeDetails>
        </Route>
        <Route path="/add-a-joke">
          <AddJoke></AddJoke>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
