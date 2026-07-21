import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";
import styles from "./StudentDashboard.module.css";

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.dashboard}>
      <Navbar />

      <div className={styles.dashboardLayout}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>

      <PageFooter />
    </div>
  );
}
