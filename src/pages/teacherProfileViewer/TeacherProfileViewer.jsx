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
        <div className={styles.box2}></div>
      </div>
        <div className={styles.container1}>
        <NavLink className={styles.btn1} to='/project-library'>BACK TO PROJECTS</NavLink>
        <NavLink className={styles.btn2} to='/teacher-dashboard'>BACK TO DASHBOARD</NavLink>
        </div>


      <div className={styles.footerPlacholer}>FOOTER PLACEHOLDER</div>
    </div>
  )
}

