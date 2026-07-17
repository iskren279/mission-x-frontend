import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import styles from "./StudentDashboard.module.css";

export default function StudentDashboard() {
  // >>>>>>>>>>SPEECH-Red arrow<<<<<<<<
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar />

      <div className="dashboardLayout">
        <Sidebar
          // >>>>>>>SPEECH-2 props to the sidebar component<<<<<<<<<<<<<<<<<<<<<
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
