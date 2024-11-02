// ROUTER
import { Link, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./JokeItem.module.css";

const JokeItem = (props) => {
  const routeMatch = useRouteMatch();

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.topic}</figcaption>
      </figure>
      <Link className="btn" to={`${routeMatch.path}/${props.id}/`}>
        Expand
      </Link>
    </li>
  );
};

export default JokeItem;
