import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import JokeItem from "./JokeItem";
import styles from "./JokeList.module.css";

const sortJokes = (jokesArray, isAscednding) => {
  return jokesArray.sort((joke1, joke2) => {
    if (isAscednding) {
      return joke1.id > joke2.id ? 1 : -1;
    } else {
      return joke1.id < joke2.id ? 1 : -1;
    }
  });
};

const JokeList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const routeMatch = useRouteMatch();

  const locationSearch = new URLSearchParams(location.search);
  const locationSearchData = locationSearch.get("sort");
  const isSortingAscending = locationSearchData === "asc";

  const sortedJokes = sortJokes(props.jokes, isSortingAscending);

  const toggleSortingHandler = () => {
    history.push(
      `${routeMatch.path}?sort=` + (isSortingAscending ? "desc" : "asc")
    );
  };

  return (
    <Fragment>
      <div className={styles.sort}>
        <button onClick={toggleSortingHandler}>
          Sort Jokes {isSortingAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
