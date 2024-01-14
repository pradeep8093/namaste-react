import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World from React 1");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // anything under root will be replaced by heading
