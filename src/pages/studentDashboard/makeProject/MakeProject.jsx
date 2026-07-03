import React from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

import styles from "../../../components/MakeProject.module.css";

export default function MakeProject() {
  return (
    <div style={{ display:"flex",height:"100vh",backgroundColor:"#B2E4FA",padding: "20px",borderRadius:"30px" }}>
      <h1>MAKE PROJECT PAGE</h1>
      <header />
      <div className={styles.imageContainer}>
        <img
          src="/images/projects/Project01-obj3.png"
          alt="obj3"
          className={styles.projectImage}
        />

        <img
          src="/images/projects/Project01-obj5.png"
          alt="obj5"
          className={styles.projectImage}
        />
      </div>

      {/* <Sidebar />
      <Footer /> */}
    </div>
  );
}
