import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.appContainer}>
      {/* Top Navbar */}
      <Navbar />

      {/* Main area */}
      <div className={styles.mainLayout}>
        <Sidebar />

        <main className={styles.contentArea}>
          <div className={styles.instructionCard}>
            <h2>1. JOIN SCRATCH</h2>

            <p>
              If you haven't used Scratch before, you will need to join Scratch
              first.
            </p>

            <p>
              Go to https://scratch.mit.edu. Click on{" "}
              <span className={styles.joinScratch}>Join Scratch</span>.
            </p>

            <img
              src="/images/projects/Project01-instructions.png"
              alt="Join Scratch Instructions"
              className={styles.img}
            />

            <p>
              Follow the instructions to join. You will need a username and a
              password that you will remember. If possible, you should also
              verify your email address so that you can share projects later.
              Ask your teacher to help with this step if you don't have an email
              address or if you are not sure what to do.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
