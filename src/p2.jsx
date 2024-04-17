import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./styles/main.css";
import States from "./components/States/index.jsx";
import Header from "./components/Header/index.jsx";

ReactDOM.createRoot(document.getElementById("p2")).render(
	<React.StrictMode>
      <Header />
		<States />
	</React.StrictMode>
);
