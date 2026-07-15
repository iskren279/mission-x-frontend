import { useNavigate, useLocation } from "react-router-dom";
import arrowLeft from "../assets/arrowLeft.png";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

import learningObjectivesIcon from "../assets/studentDashboard/learningObjectives.png";
import instructionsIcon from "../assets/studentDashboard/instructionsSelected.png";
import videoIcon from "../assets/studentDashboard/video.png";
import makeProjectIcon from "../assets/studentDashboard/makeProject.png";
import submitProjectIcon from "../assets/studentDashboard/submitProject.png";
import bonusChallengeIcon from "../assets/studentDashboard/bonusChallenge.png";
import quizIcon from "../assets/studentDashboard/takeTheQuiz.png";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      name: "Learning Objectives",
      icon: learningObjectivesIcon,
      path: "/student-dashboard",
    },
    {
      name: "Instructions",
      icon: instructionsIcon,
      path: "/student-dashboard/instructions",
    },
    {
      name: "Video Tutorial",
      icon: videoIcon,
      path: "/student-dashboard/video-tutorial",
    },
    {
      name: "Make Project",
      icon: makeProjectIcon,
      path: "/student-dashboard/make-project",
    },
    {
      name: "Submit Project",
      icon: submitProjectIcon,
      path: "/student-dashboard/submit-project",
    },
    {
      name: "Bonus Challenge",
      icon: bonusChallengeIcon,
      path: "/student-dashboard/bonus-challenge",
    },
    {
      name: "Take the Quiz",
      icon: quizIcon,
      path: "/student-dashboard/take-quiz",
    },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      {/* Logo + Profile */}
      <div className={styles.profileSection}>
        <img
          src="/images/RawiriFletcher.png"
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
                location.pathname === item.path ? styles.active : ""
              }`}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
              }}
            >
              <img src={item.icon} alt={item.name} className={styles.navIcon} />

              <span>{item.name}</span>
            </button>

            {item.name === "Take the Quiz" && (
              <div className={styles.arrowContainer} onClick={toggleSidebar}>
                <img
                  src={arrowLeft}
                  alt="Arrow Left"
                  className={`${styles.arrowLeft} ${
                    isOpen ? "" : styles.arrowRotate
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}

      {/* Bottom buttons */}
      <Footer />
    </aside>
  );
}
