import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
