import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/projectLibrary/ProjectLibraryNavbar";
import Instructions from "./pages/studentDashboard/instructions/Instructions";
import Footer from "./pages/projectLibrary/ProjectLibraryFooter";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
