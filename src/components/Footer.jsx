import styles from "./Footer.module.css";
import profileIcon from "../assets/profile.png";
import settingsIcon from "../assets/settings.png";
import logoutIcon from "../assets/logout.png";

export default function Footer({ isOpen }) {
  return (
    <div
      className={`${styles.sidebarFooter} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <button className={styles.footerButton}>
        <img src={profileIcon} alt="Profile" className={styles.footerIcon} />
        {isOpen && <span>Profile</span>}
      </button>

      <button className={styles.footerButton}>
        <img src={settingsIcon} alt="Settings" className={styles.footerIcon} />
        {isOpen && <span>Settings</span>}
      </button>

      <button className={styles.footerButton}>
        <img src={logoutIcon} alt="Log Out" className={styles.footerIcon} />
        {isOpen && <span>Log Out</span>}
      </button>
    </div>
  );
}
