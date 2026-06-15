import styles from "./Sidebar.module.css";
import Footer from "./Footer";

export default function Sidebar() {
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
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.sidebarLogo}>
        <div className={styles.logoCircle}>MX</div>
        <h3 className={styles.logoText}>MISSION X</h3>
      </div>

      {/* Navigation */}
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <button
            key={item}
            className={`${styles.navItem} ${
              item === "Instructions" ? styles.active : ""
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <Footer />
    </aside>
  );
}
