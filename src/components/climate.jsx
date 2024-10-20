import React from "react";
import "./climate.css";

export const Climate = ({ data }) => {
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src="./images/temp.svg" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{data.temperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhkost vzduchu {data.humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button className="button">+</button>
        <button className="button">-</button>
      </div>
    </div>
  );
};
