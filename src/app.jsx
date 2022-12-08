import { other } from "./other";
import "./style.css";
import ReactDOM from "react-dom";
import React from "react";

export const App = () => {
  return <div className="hello">Test Webpack Deployed app</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
