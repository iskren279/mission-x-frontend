import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.sidebarFooter}>
      <div className={styles.footerItem}>
        <span className={styles.icon}>👤</span>
        <span>Profile</span>
      </div>

      <div className={styles.footerItem}>
        <span className={styles.icon}>⚙️</span>
        <span>Settings</span>
      </div>

      <div className={`${styles.footerItem} ${styles.logout}`}>
        <span className={styles.icon}>🚪</span>
        <span>Logout</span>
      </div>

      <div className={styles.levelUp}>
        <span>©</span>
        <span>LevelUp Works 2020</span>
      </div>
    </div>
  );
}
