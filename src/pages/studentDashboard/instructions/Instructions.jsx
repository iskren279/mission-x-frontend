import styles from "./Instructions.module.css";
import Sidebar from "../../../components/Sidebar";
import scratchScreenshot from "../../../assets/Home/scratch screenshot.png";
import Navbar from "../../../components/Navbar";
import levelUpLogo from "../assets/Navbar/LevelUpWorks-blue.png";

export default function Instructions() {
  return (
    <div className={styles.app}>
      <Sidebar />

      <div className={styles.pageContent}>
        <Navbar />

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
                <a
                  href="https://scratch.mit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Scratch
                </a>
                .
              </p>

              <img
                src={scratchScreenshot}
                alt="Scratch homepage"
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
  );
}
