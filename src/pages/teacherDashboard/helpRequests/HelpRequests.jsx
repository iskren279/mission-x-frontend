import React from "react";
import Footer from "../../projectLibrary/ProjectLibraryFooter";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import styles from "./helpRequest.module.css";
import HelpCard from "../../../sharedComponents/HelpCard";

export default function HelpRequests() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.box1}>
          <div className={styles.box2}>
            <HelpCard className={styles.card} />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
