import React from "react";
import styles from "../../../components/MakeProject.module.css";

export default function MakeProject() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>MAKE PROJECT PAGE</h1>

        <div className={styles.imageContainer}>
          <img
            src="/images/projects/Project01-obj3.png"
            alt="Project Step 1"
            className={styles.projectImage}
          />

          <img
            src="/images/projects/Project01-obj5.png"
            alt="Project Step 2"
            className={styles.projectImage}
          />
        </div>
      </div>
    </div>
  );
}
