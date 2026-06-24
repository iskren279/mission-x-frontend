import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Profile</p>
      <p>Settings</p>
      <p>Logout</p>
    </footer>
  );
}

export default Footer;
