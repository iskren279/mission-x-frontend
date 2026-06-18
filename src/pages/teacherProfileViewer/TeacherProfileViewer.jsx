import { NavLink } from 'react-router'
import styles from './TeacherProfileViewer.module.css'

export default function TeacherProfileViewer() {
  return (
    <div>
      <div className={styles.headerPlacholer}>HEADER PLACEHOLDER</div>


      <div className={styles.container}>
        <div className={styles.box1}>
            <img src="/images/teachers/JasminaSalvador.png" alt="Teacher Profile" className={styles.teach} />
            <br />
            <button className={styles.btn}>EDIT PROFILE</button>
            <br />
            <button className={styles.btn}>CHANGE PHOTO</button>
            <br />
            <button className={styles.btn}>SETTINGS</button>
        </div> 
        <div className={styles.box2}>
          <div className={styles.con}>
            <h1 className={styles.jas}>Jasmina</h1>
            <h3 className={styles.temp1}>School</h3>
            <h3 className={styles.temp1}>Courses Purchashed</h3>
            <h3 className={styles.temp1}>Date of Birth</h3>
            <h3 className={styles.temp1}>Contact Number</h3>
            <h3 className={styles.temp1}>Email Address</h3>
          </div>
          <div className={styles.con}>
            <h1 className={styles.sal}>Salvador</h1>
            <h3 className={styles.temp}>Homai School</h3>
            <h3 className={styles.temp}>Beginner</h3>
            <h3 className={styles.temp}>25 June 1986</h3>
            <h3 className={styles.temp}>027 745 28 00</h3>
            <h3 className={styles.temp}>jsalvador@homai.edu</h3>
          </div>
        </div>
      </div>
        <div className={styles.container1}>
        <NavLink className={styles.btn1} to='/project-library'>BACK TO PROJECTS</NavLink>
        <NavLink className={styles.btn2} to='/teacher-dashboard'>BACK TO DASHBOARD</NavLink>
        </div>


      <div className={styles.footerPlacholer}>FOOTER PLACEHOLDER</div>
    </div>
  )
}

