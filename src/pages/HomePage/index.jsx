import "./style.css";
import { smartHomeData } from "../../smartHomeData";
import { Header } from "../../components/header";
import { Dashboard } from "../../components/Dashboard";

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header title="Chytrý dům" />
        <Dashboard data={smartHomeData} />
      </div>
    </>
  );
};
