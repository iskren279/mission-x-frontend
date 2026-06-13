import "./App.css";
import { Outlet } from "react-router-dom";
import Instructions from "./pages/studentDashboard/instructions/Instructions";

function App() {
  return (
    <>
      <h1>Start MissionX Here</h1>
      <Instructions />
      <Outlet />
    </>
  );
}

export default App;
