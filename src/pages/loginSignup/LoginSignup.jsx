import { useState } from "react";
import styles from "./LoginSignup.module.css";
import escIcon from "../../assets/LoginSignup/esc.png";
import studentsImg from "../../assets/LoginSignup/students.png";
import teachersImg from "../../assets/LoginSignup/teachers.png";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("signup");

  // Navigate to the home page when the close button is clicked.
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>

      {/* Close icon */}
      <button type="button" className={styles.closeButton} onClick={() => navigate("/")}>
         <img src={escIcon} alt="close" className={styles.closeIcon} />
      </button>




      {/* Columns layout */}
      <div className={styles.columns}>

        {/* Student Column */}
        <div className={styles.column}>
          <img src={studentsImg} alt="students" className={styles.illustration} />
          <h2 className={styles.title}>Students</h2>

                {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === "login" ? styles.activeTab : ""}
          onClick={() => setActiveTab("login")}
        >
          LOG IN
        </button>

        <button
          className={activeTab === "signup" ? styles.activeTab : ""}
          onClick={() => setActiveTab("signup")}
        >
          SIGN UP
        </button>
      </div>

          <form className={styles.form}>
            {activeTab === "signup" && <input type="text" placeholder="Full name" />}
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            {activeTab === "signup" && <input type="password" placeholder="Confirm Password" />}

            <button type="submit" className={styles.submitBtn}>
              {activeTab === "signup" ? "SIGN UP" : "LOG IN"}
            </button>
          </form>
        </div>

          {/* Divider vertical line between columns */}
      <div className={styles.divider}></div>

        {/* Teacher Column */}
        <div className={styles.column}>
          <img src={teachersImg} alt="teachers" className={styles.illustration} />
          <h2 className={styles.title}>Teachers</h2>

                {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === "login" ? styles.activeTab : ""}
          onClick={() => setActiveTab("login")}
        >
          LOG IN
        </button>

        <button
          className={activeTab === "signup" ? styles.activeTab : ""}
          onClick={() => setActiveTab("signup")}
        >
          SIGN UP
        </button>
      </div>

          <form className={styles.form}>
            {activeTab === "signup" && <input type="text" placeholder="Full name" />}
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            {activeTab === "signup" && <input type="password" placeholder="Confirm Password" />}

            <button type="submit" className={styles.submitBtn}>
              {activeTab === "signup" ? "SIGN UP" : "LOG IN"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
