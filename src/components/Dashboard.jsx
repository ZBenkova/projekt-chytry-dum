import React from "react";
import { Lights } from "./lights";
import { Climate } from "./climate";
import { Blinds } from "./blinds";
import { Energy } from "./energy";

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights data={data.lights} />
      <Climate data={data.climate} />
      <Blinds data={data.blinds} />
      <Energy data={data.energyConsumption} />
    </main>
  );
};
