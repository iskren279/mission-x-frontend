import styles from "./Instructions.module.css";
import Sidebar from "../../../components/Sidebar";
import scratchScreenshot from "../../../assets/Home/scratch screenshot.png";

export default function Instructions() {
  return (
    <div className={styles.app}>
      <Sidebar />

      <main className={styles.main}>
        <div className={styles.card}>
          <h1>1. JOIN SCRATCH</h1>

          <p>
            If you haven't used Scratch before, you will need to join Scratch
            first.
          </p>

          <p>Go to https://scratch.mit.edu. Click on Join Scratch.</p>

          <img
            src={scratchScreenshot}
            alt="Scratch homepage"
            className={styles.img}
          />

          <p>Follow the instructions to join...</p>
        </div>
      </main>
    </div>
  );
}
