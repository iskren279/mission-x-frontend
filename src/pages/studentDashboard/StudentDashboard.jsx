import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

function StudentDashboard() {
  return (
    <>
      <Navbar />
      <main style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
