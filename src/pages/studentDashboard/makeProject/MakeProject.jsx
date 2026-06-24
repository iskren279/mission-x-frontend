import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import styles from "../../../sharedComponents/MakeProject.module.css";

export default function MakeProject() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>MAKE PROJECT PAGE</h1>
      <Header />
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

      <Sidebar />
      <Footer />
    </div>
  );
}
