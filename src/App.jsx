import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Start MissionX Here</h1>
      <Outlet />
    </>
  );
}

export default App;
