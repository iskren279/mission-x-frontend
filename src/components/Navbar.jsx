import styles from "./Navbar.module.css";
import levelUpLogo from "../assets/Navbar/LevelUpWorks-blue.png";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img
            src={levelUpLogo}
            alt="LevelUp Works"
            className={styles.logoImage}
          />
        </div>

        <div className={styles.projectInfo}>
          <span className={styles.projectTitle}>PROJECT</span>
          <span className={styles.projectSubtitle}>Introduction</span>
        </div>

        <div className={styles.progressCircle}>1</div>

        <div className={styles.progressDots}>
          {[...Array(15)].map((_, index) => (
            <div key={index} className={styles.dot}></div>
          ))}
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.submitBtn}>Project Submitted</button>

        <button className={styles.helpBtn}>Ask Teacher For Help</button>

        <button className={styles.projectsBtn}>More Projects</button>
      </div>
    </header>
  );
}
