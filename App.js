const heading = React.createElement("h1", {}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // anything under root will be replaced by heading
