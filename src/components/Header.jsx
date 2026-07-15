import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LEVELUP WORKS</div>

      <div className={styles.progress}>
        {[...Array(15)].map((_, index) => (
          <span key={index} className={styles.dot}></span>
        ))}
      </div>

      <div className={styles.buttons}>
        <button>Start Project</button>
        <button>Ask Teacher</button>
        <button>More Projects</button>
      </div>
    </header>
  );
}

export default Header;
