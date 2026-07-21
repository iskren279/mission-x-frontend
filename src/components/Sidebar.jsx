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
// Add Navlink import from react router:
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  // ********************SHOW THIS*********************
  // DYNAMIC RENDERING*****
  // >>>>>>>>>>SPEECH<<<<<<<<<<<<<
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
      path: "/student-dashboard/take-the-quiz",
    },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      {/* Profile Section at the very top */}
      <div className={styles.profileSection}>
        <img
          src="/images/students/RawiriFletcher.png"
          alt="Rawiri Fletcher"
          className={styles.avatar}
        />
      </div>
      <button
        className={styles.toggleButton}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        <img src={arrowLeft} alt="Toggle sidebar" />
      </button>

      {/* Navigation */}
      {/* ******************SPEECH ********************** */}
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <div key={item.name} className={styles.menuItemWrapper}>
            <NavLink
              to={item.path}
              end
              aria-label={item.name}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className={styles.navIcon}
              />
              <span>{item.name}</span>
            </NavLink>

            {/*>>>>>>>>>>>>>SPEECH- ONCLICK EVENT<<<<<<<<<<<<<<<<< */}
            {item.name === "Take the Quiz" && (
              <button className={styles.arrowContainer} onClick={toggleSidebar}>
                <img
                  src={arrowLeft}
                  alt="Toggle Sidebar"
                  className={styles.arrowLeft}
                />
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <Footer isOpen={isOpen} />
    </aside>
  );
}
