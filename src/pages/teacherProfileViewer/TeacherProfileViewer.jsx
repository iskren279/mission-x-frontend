import { NavLink, useParams } from "react-router";
import styles from "./TeacherProfileViewer.module.css";
import Navbar from "../projectLibrary/ProjectLibraryNavbar";
import Footer from "../projectLibrary/ProjectLibraryFooter";
import { useState, useEffect } from "react";

export default function TeacherProfileViewer() {
  const [teacher, setTeacher] = useState([]);
  const {teacher_id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/teachers/${teacher_id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(...data));
  }, []);

const d = new Date(teacher.date_of_birth);
console.log(d)
const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};
let dob = d.toLocaleDateString('en-NZ', options);
console.log(dob)

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box1}>
          <img
            src={teacher.profile_pic}
            alt="teacher picture"
            className={styles.teach}
          />
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
            <h1 className={`${styles.jas} ${styles.nf}`}>{teacher.name}</h1>
            <div className={`${styles.textSideBySide}`}>
              <h3 className={`${styles.insideText} ${styles.nf}`}>School</h3>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                {teacher.school}
              </h3>
            </div>

            <div className={`${styles.textSideBySide}`}>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                Date of Birth
              </h3>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                {dob}
              </h3>
            </div>
            <div className={`${styles.textSideBySide}`}>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                Contact Number
              </h3>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                {teacher.contact_number}
              </h3>
            </div>
            <div className={`${styles.textSideBySide}`}>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                Email Address
              </h3>
              <h3 className={`${styles.insideText} ${styles.nf}`}>
                {teacher.email}
              </h3>
            </div>
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
