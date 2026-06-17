import styles from "./Footer.module.css";
import profileIcon from "../assets/profile.png";
import settingsIcon from "../assets/settings.png";
import logoutIcon from "../assets/logout.png";

export default function Footer() {
  return (
    <div className={styles.sidebarFooter}>
      <button className={styles.footerButton}>
        <img src={profileIcon} alt="Profile" className={styles.footerIcon} />
        <span>Profile</span>
      </button>

      <button className={styles.footerButton}>
        <img src={settingsIcon} alt="Settings" className={styles.footerIcon} />
        <span>Settings</span>
      </button>

      <button className={styles.footerButton}>
        <img src={logoutIcon} alt="Log Out" className={styles.footerIcon} />
        <span>Log Out</span>
      </button>
    </div>
  );
}
