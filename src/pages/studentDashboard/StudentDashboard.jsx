import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import styles from "./StudentDashboard.module.css";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar />

      <div className={styles.dashboardLayout}>
        <Sidebar
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
