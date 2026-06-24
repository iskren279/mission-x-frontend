import React from "react";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatar}></div>
      </div>

      <ul>
        <li>Learning Objectives</li>
        <li>Instructions</li>
        <li>Video Tutorial</li>
        <li>Make Project</li>
        <li>Submit Project</li>
        <li>Bonus Challenge</li>
        <li>Take The Quiz</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
