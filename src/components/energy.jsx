import React from "react";
import "./energy.css";

export const Energy = ({ data }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src="./images/electricity.svg" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{data.electricity} kW</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src="./images/water.svg" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {data.water} m<sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};
