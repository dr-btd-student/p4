import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./styles/main.css";
import States from "./components/States";
import Header from "./components/Header";
import Example from "./components/Example";

const Switch = () => {
   const [showStates, setShowStates] = useState(false);
   let alternateComponent = showStates ? "<Example />" : "<States />";
   return (
      <div>
         <button onClick={() => setShowStates(!showStates)}>Switch to {alternateComponent}</button>
         {showStates ? <States /> : <Example />}
      </div>
   );
};


ReactDOM.createRoot(document.getElementById("p4")).render(
	<React.StrictMode>
      <Header />
      <Switch />
	</React.StrictMode>
);
