import styles from "./Instructions.module.css";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
// import Sidebar from "../../../components/Sidebar";
// import Navbar from "../../../components/Navbar";

export default function Instructions() {
  const [instructions, setInstructions] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/projects/1/instructions")
      .then((res) => res.json())
      .then((data) => {
        const instructionsData = Array.isArray(data) ? data[0] : data;
        setInstructions(instructionsData);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!instructions) {
    return (
      <div className={styles.app}>
        <main className={styles.main}>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>Instructions</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(instructions.instructions || ""),
        }}
      />
      <div className={styles.app}>
        {/* <Sidebar /> */}

        <div className={styles.pageContent}>
          {/* <Navbar /> */}

          <main className={styles.main}>
            <div className={styles.card}>
              <div className={styles.content}>
                <h1>1. JOIN SCRATCH</h1>

                <p>
                  If you haven't used Scratch before, you will need to join
                  Scratch first.
                </p>

                <p>
                  Go to https://scratch.mit.edu. Click on{" "}
                  <span className={styles.joinScratch}>Join Scratch</span>.
                </p>

                <img
                  src="/images/projects/Project01-instructions.png"
                  alt="Project Instructions"
                  className={styles.img}
                />

                <p>
                  Follow the instructions to join. You will need a username and
                  password that you will remember.
                </p>
              </div>

              <div className={styles.cardFooter}>© LevelUp Works 2020</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
