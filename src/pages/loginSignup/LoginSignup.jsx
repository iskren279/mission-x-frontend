import { useState } from "react";
import styles from "./LoginSignup.module.css";
import escIcon from "../../assets/LoginSignup/esc.png";
import studentsImg from "../../assets/LoginSignup/students.png";
import teachersImg from "../../assets/LoginSignup/teachers.png";
import { useNavigate } from "react-router-dom";

const emptyForm = { name: "", email: "", password: "", confirmPassword: "" };

const LoginSignup = () => {
  // Each column keeps its own tab so the Student and Teacher forms don't mirror each other
  const [activeTab, setActiveTab] = useState({ student: "signup", teacher: "signup" });

  // Separate form data per role
  const [forms, setForms] = useState({
    student: { ...emptyForm },
    teacher: { ...emptyForm },
  });

  const navigate = useNavigate();

  /* Function to handle tab change for both student and teacher */
  const handleTabChange = (role, tab) => {
    setActiveTab((prev) => ({ ...prev, [role]: tab }));
  };

  const handleChange = (role, field, value) => {
    setForms((prev) => ({
      ...prev,
      [role]: { ...prev[role], [field]: value },
    }));
  };

  /*
  Async function to handle submit for both student and teacher selectedRole 
  ("student" or "teacher") is passed by whichever column's form is submitted
  */
  const handleSubmit = async (e, selectedRole) => {
    e.preventDefault();

    const tab = activeTab[selectedRole];
    const { name, email, password, confirmPassword } = forms[selectedRole];

    // Signup validation to check if all fields are filled and passwords match
    if (tab === "signup") {
      if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert("Please fill in all fields");
        return;
      }
      if (password.trim() !== confirmPassword.trim()) {
        alert("Passwords do not match");
        return;
      }
    }

    // Login validation to check if email and password are filled
    if (tab === "login") {
      if (!email.trim() || !password.trim()) {
        alert("Please enter email and password");
        return;
      }
    }

    // Endpoint to signup or login for both student and teacher
    const endpoint =
      tab === "signup"
        // Signup endpoint for both student and teacher
        ? `http://localhost:4000/auth/${selectedRole}/signup`
        // Login endpoint for both student and teacher
        : `http://localhost:4000/auth/${selectedRole}/login`;

    // Request body to send to the endpoint
    const body =
      tab === "signup"
        ? { name, email, password }
        : { email, password };

    // Fetch request to the endpoint with the request body
    let data;
    try { // Try catch block to handle any errors from the fetch request
      const res = await fetch(endpoint, {// await fetch is used to wait for the fetch request to complete
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Await res.json() is used to wait for the response to be parsed as JSON
      data = await res.json(); // data is the response from the endpoint
    } catch (err) { // Catch block to handle any errors from the fetch request
      console.error("Fetch Error:", err);
      alert("Cannot reach the server. Please make sure the backend is running on http://localhost:4000.");
      return;
    }

    // Validation to check if there is an error message in the response
    if (data.errorMessage) {
      alert(data.errorMessage);
      return;
    }

    alert(data.message);

    // Validation to check if the user is logging in
    if (tab === "login") {

      // Redirect to student or teacher dashboard
      navigate(selectedRole === "student" ? "/student-dashboard" : "/teacher-dashboard");
    }
  };
 
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
          className={activeTab.student === "login" ? styles.activeTab : ""}
          onClick={() => handleTabChange("student", "login")}
        >
          LOG IN
        </button>

        <button
          className={activeTab.student === "signup" ? styles.activeTab : ""}
          onClick={() => handleTabChange("student", "signup")}
        >
          SIGN UP
        </button>
      </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e, "student")}>
            {activeTab.student === "signup" && (
              <input
                type="text"
                placeholder="Full name"
                value={forms.student.name}
                onChange={(e) => handleChange("student", "name", e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              value={forms.student.email}
              onChange={(e) => handleChange("student", "email", e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={forms.student.password}
              onChange={(e) => handleChange("student", "password", e.target.value)}
            />
            {activeTab.student === "signup" && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={forms.student.confirmPassword}
                onChange={(e) => handleChange("student", "confirmPassword", e.target.value)}
              />
            )}

            <button type="submit" className={styles.submitBtn}>
              {activeTab.student === "signup" ? "SIGN UP" : "LOG IN"}
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
          className={activeTab.teacher === "login" ? styles.activeTab : ""}
          onClick={() => handleTabChange("teacher", "login")}
        >
          LOG IN
        </button>

        <button
          className={activeTab.teacher === "signup" ? styles.activeTab : ""}
          onClick={() => handleTabChange("teacher", "signup")}
        >
          SIGN UP
        </button>
      </div>

          <form className={styles.form} onSubmit={(e) => handleSubmit(e, "teacher")}>
            {activeTab.teacher === "signup" && (
              <input
                type="text"
                placeholder="Full name"
                value={forms.teacher.name}
                onChange={(e) => handleChange("teacher", "name", e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              value={forms.teacher.email}
              onChange={(e) => handleChange("teacher", "email", e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={forms.teacher.password}
              onChange={(e) => handleChange("teacher", "password", e.target.value)}
            />
            {activeTab.teacher === "signup" && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={forms.teacher.confirmPassword}
                onChange={(e) => handleChange("teacher", "confirmPassword", e.target.value)}
              />
            )}

            <button type="submit" className={styles.submitBtn}>
              {activeTab.teacher === "signup" ? "SIGN UP" : "LOG IN"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
