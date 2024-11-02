import { Link } from "react-router-dom";

const NotFound = function () {
  return (
    <section
      className="centered"
      style={{
        flexDirection: "column",
      }}
    >
      <h1>Страница не найдена</h1>
      <Link className="btn" to="/add-a-joke">
        Add a Joke
      </Link>
    </section>
  );
};

export default NotFound;
