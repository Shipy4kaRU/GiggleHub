// ROUTER
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/jokes">
              Jokes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/add-a-joke">
              Add a Joke
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
