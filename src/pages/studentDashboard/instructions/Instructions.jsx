import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import styles from "./Instructions.module.css";

export default function Instructions() {
  const [instructions, setInstructions] = useState(null);

  useEffect(() => {
    // Fetch instructions from backend API
    fetch("http://localhost:4000/projects/1/instructions")
      .then((res) => {
        console.log("Status:", res.status);

        if (!res.ok) {
          throw new Error("Failed to fetch instructions");
        }

        return res.json();
      })
      .then((data) => {
        console.log("Received data:", data);

        const instructionsData = Array.isArray(data) ? data[0] : data;

        console.log("Setting instructions:", instructionsData);

        setInstructions(instructionsData);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  // Early return prevents the page trying to display
  // data before the database request has completed.
  if (!instructions) {
    return (
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h1>Loading Instructions...</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/*
            Instructions are stored as HTML in the database.
            DOMPurify removes unsafe HTML/scripts before displaying it,
            preventing malicious code from being executed.
          */}

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(instructions.instructions || ""),
            }}
          />
        </div>
      </div>
    </main>
  );
}
