import levelUpLogo from "../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../assets/NavBar/NZFlag.png";
import maoriFlag from "../assets/NavBar/MaoriFlag.png";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      {/* 1. LEFT SECTION (Just the Logo) */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img
            src={levelUpLogo}
            alt="LevelUp Works"
            className={styles.logoImage}
          />
        </div>
      </div>

      {/* 2. CENTER SECTION (Text, Circle, and Dots) */}
      <div className={styles.centerSection}>
        <div className={styles.projectInfo}>
          <span className={styles.projectTitle}>PROJECT</span>
          <span className={styles.projectSubtitle}>Introduction</span>
        </div>

        <div className={styles.progressCircle}>1</div>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
        <div className={styles.progressDots}>
          {[...Array(15)].map((_, index) => (
            <div key={index} className={styles.dot}></div>
          ))}
        </div>
      </div>

      {/* 3. RIGHT SECTION (Buttons and Flags) */}
      <div className={styles.rightSection}>
        <button className={styles.submitBtn}>Project Submitted</button>
        <button className={styles.helpBtn}>Ask Teacher For Help</button>
        <button className={styles.projectsBtn}>More Projects</button>

        {/* Added the flags container here right after More Projects */}
        <div className={styles.flagsContainer}>
          <img src={nzFlag} alt="NZ Flag" className={styles.flag} />
          <img src={maoriFlag} alt="Maori Flag" className={styles.flag} />
        </div>
      </div>
    </header>
  );
}
