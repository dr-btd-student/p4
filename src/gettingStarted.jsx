import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./styles/main.css";
import Example from "./components/Example/index.jsx";

ReactDOM.createRoot(document.getElementById("getting-started")).render(
	<React.StrictMode>
		<Example />
	</React.StrictMode>
);
