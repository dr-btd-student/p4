import React, { useState } from "react";
import "../../styles/main.css";
import States from "../States";
import Example from "../Example";

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

export default Switch;