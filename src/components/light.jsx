import React, { useState } from "react";
import "./lights.css";
import "./images/light-off.svg";

export const Light = ({ name, defaultState }) => {
  const [state, setState] = useState(defaultState);

  const clickHandler = () => {
    console.log("tut");
  };

  return (
    <div className="light" onClick={clickHandler}>
      <div className="light__icon">
        <img src="./images/light-off.svg" />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
