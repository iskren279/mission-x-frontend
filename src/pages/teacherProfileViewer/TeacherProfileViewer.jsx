import { NavLink } from "react-router";
import styles from "./TeacherProfileViewer.module.css";
import Navbar from "../projectLibrary/ProjectLibraryNavbar";
import Footer from "../projectLibrary/ProjectLibraryFooter";
import { useState, useEffect } from "react";

export default function TeacherProfileViewer() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/teachers`)
      .then((res) => res.json())
      .then((data) => setTeacher(...data))
    }, []);
    console.log(teacher)

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box1}>
          <img src={teacher.profile_pic} alt="teacher picture" className={styles.teach}/> 
          <br />
          <button className={`${styles.btn} ${styles.osf}`}>
            EDIT PROFILE
          </button>
          <br />
          <button className={`${styles.btn} ${styles.osf}`}>
            CHANGE PHOTO
          </button>
          <br />
          <button className={`${styles.btn} ${styles.osf}`}>SETTINGS</button>
        </div>
        <div className={styles.box2}>
          <div className={styles.con}>
                  <h1 className={`${styles.jas} ${styles.nf}`}>
                    {teacher.name}
                  </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className={`${styles.insideText} ${styles.nf}`}>
              School
            </h3>
            <h3 className={`${styles.insideText} ${styles.nf}`}>Date of Birth</h3>
            <h3 className={`${styles.insideText} ${styles.nf}`}>Contact Number</h3>
            <h3 className={`${styles.insideText} ${styles.nf}`}>Email Address</h3>
          </div>


              <div className={styles.con}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 className={`${styles.insideText} ${styles.insideText1} ${styles.osf}`}>
                  {teacher.school}
                </h3>
                <h3 className={`${styles.insideText} ${styles.osf}`}>
                  {teacher.date_of_birth}
                </h3>
                <h3 className={`${styles.insideText} ${styles.osf}`}>
                  {teacher.contact_number}
                </h3>
                <h3 className={`${styles.insideText} ${styles.osf}`}>
                  {teacher.email}
                </h3>
              </div>
        </div>
      </div>
      <div className={styles.container1}>
        <NavLink
          className={`${styles.btn1} ${styles.nf}`}
          to="/project-library"
        >
          BACK TO PROJECTS
        </NavLink>
        <NavLink
          className={`${styles.btn2} ${styles.nf}`}
          to="/teacher-dashboard"
        >
          BACK TO DASHBOARD
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
