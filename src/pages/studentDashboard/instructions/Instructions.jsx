export default function Instructions() {
  return (
    <div className={styles.pageContent}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h1>1. JOIN SCRATCH</h1>

            <p>
              If you haven't used Scratch before, you will need to join Scratch
              first.
            </p>

            <p>
              Go to https://scratch.mit.edu. Click on{" "}
              <span className={styles.joinScratch}>Join Scratch</span>.
            </p>

            <img
              src="/images/projects/project01-instructions.png"
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
  );
}
