import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/projectLibrary/ProjectLibraryNavbar";
import Footer from "./pages/projectLibrary/ProjectLibraryFooter";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
