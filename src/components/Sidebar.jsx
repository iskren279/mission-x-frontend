import styles from "./Sidebar.module.css";
import Footer from "./Footer";

import learningObjectivesIcon from "../assets/studentDashboard/learningObjectives.png";
import instructionsIcon from "../assets/studentDashboard/instructionsSelected.png";
import videoIcon from "../assets/studentDashboard/video.png";
import makeProjectIcon from "../assets/studentDashboard/makeProject.png";
import submitProjectIcon from "../assets/studentDashboard/submitProject.png";
import bonusChallengeIcon from "../assets/studentDashboard/bonusChallenge.png";
import quizIcon from "../assets/studentDashboard/takeTheQuiz.png";

import arrowLeft from "../assets/arrowLeft.png";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Learning Objectives",
      icon: learningObjectivesIcon,
    },
    {
      name: "Instructions",
      icon: instructionsIcon,
    },
    {
      name: "Video Tutorial",
      icon: videoIcon,
    },
    {
      name: "Make Project",
      icon: makeProjectIcon,
    },
    {
      name: "Submit Project",
      icon: submitProjectIcon,
    },
    {
      name: "Bonus Challenge",
      icon: bonusChallengeIcon,
    },
    {
      name: "Take the Quiz",
      icon: quizIcon,
    },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Profile Section at the very top */}
      <div className={styles.profileSection}>
        <img
          src="/images/students/RawiriFletcher.png"
          alt="Rawiri Fletcher"
          className={styles.avatar}
        />
      </div>

      {/* Navigation */}
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <div key={item.name} className={styles.menuItemWrapper}>
            <button
              className={`${styles.navItem} ${
                item.name === "Instructions" ? styles.active : ""
              }`}
            >
              <img src={item.icon} alt={item.name} className={styles.navIcon} />
              <span>{item.name}</span>
            </button>

            {item.name === "Take the Quiz" && (
              <div className={styles.arrowContainer}>
                <img
                  src={arrowLeft}
                  alt="Arrow Left"
                  className={styles.arrowLeft}
                />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <Footer />
    </aside>
  );
}
