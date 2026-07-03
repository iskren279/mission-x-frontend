import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import styles from "../../../components/LearningObject.module.css";
import DOMPurify from "dompurify";

export default function LearningObjectives() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects/1")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const content = {
    __html: DOMPurify.sanitize(project?.description || ""),
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Learning Objectives</h1>

          <div className={styles.imageContainer}>
            <img
              src="/images/projects/Project01-obj1.png"
              alt="obj1"
              className={styles.projectImage}
            />

            <img
              src="/images/projects/Project01-obj2.png"
              alt="obj2"
              className={styles.projectImage}
            />

            <img
              src="/images/projects/Project01-obj3.png"
              alt="obj3"
              className={styles.projectImage}
            />

            <img
              src="/images/projects/Project01-obj4.png"
              alt="obj4"
              className={styles.projectImage}
            />

            <img
              src="/images/projects/Project01-obj5.png"
              alt="obj5"
              className={styles.projectImage}
            />

            <img
              src="/images/projects/Project01-obj6.png"
              alt="obj6"
              className={styles.projectImage}
            />
          </div>

          <div dangerouslySetInnerHTML={content}></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
