<<<<<<< HEAD
import styles from "./Instructions.module.css";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
=======

>>>>>>> c3b2a985e84f799e7b953f9207977e16809ae29c

export default function Instructions() {
  const menuItems = [
    "Learning Objectives",
    "Instructions",
    "Video Tutorial",
    "Make Project",
    "Submit Project",
    "Bonus Challenge",
    "Take the Quiz",
  ];

  return (
<<<<<<< HEAD
    <div className={styles.app}>
      <Sidebar />
=======
   

      {/* MAIN */}
      <main className="main">
        <div className="card">
          <h1>1. JOIN SCRATCH</h1>

          <p>
            If you haven't used Scratch before, you will need to join Scratch
            first.
          </p>

          <p>
            Go to <b>scratch.mit.edu</b> and click <b>Join Scratch</b>.
          </p>

          <img
            src="https://scratch.mit.edu/images/scratch-og.png"
            className="img"
            alt="Scratch"
          />

          <p>Follow the instructions to complete signup.</p>
        </div>
      </main>
    </div>
  );
}
>>>>>>> c3b2a985e84f799e7b953f9207977e16809ae29c

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
                <span className={styles.joinScratch}>Join Scratch</span>.
              </p>
              <img
                src="public/images/projects/project01-instructions.png"
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
  );
}
