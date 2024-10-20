import React from "react";
import "./lights.css";
import { Light } from "./light";

export const Lights = ({ data }) => {
  return (
    <div className="lights">
      {data.map((light, index) => (
        <Light data={light} key={index} />
      ))}
    </div>
  );
};
