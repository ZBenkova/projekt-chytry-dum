import React from "react";
import "./blinds.css";

export const Blinds = ({ data }) => {
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src="./images/blinds-open.svg" />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button className="button button--active">{data.blinds}</button>
        <button className="button">Zavřeno</button>
      </div>
    </div>
  );
};
