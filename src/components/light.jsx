import React from "react";
import "./lights.css";

export const Light = ({ data }) => {
  return (
    <div className="light">
      <div className="light__icon">
        <img src="./images/light-off.svg" />
      </div>
      <div className="light__name">{data.name}</div>
    </div>
  );
};
