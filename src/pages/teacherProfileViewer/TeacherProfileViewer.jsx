import { NavLink } from 'react-router'
import styles from './TeacherProfileViewer.module.css'
import Navbar from '../projectLibrary/ProjectLibraryNavbar'
import Footer from '../projectLibrary/ProjectLibraryFooter'

export default function TeacherProfileViewer() {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.box1}>
            <img src="/images/teachers/JasminaSalvador.png" alt="Teacher Profile" className={styles.teach} />
            <br />
            <button className={`${styles.btn} ${styles.osf}`}>EDIT PROFILE</button>
            <br />
            <button className={`${styles.btn} ${styles.osf}`}>CHANGE PHOTO</button>
            <br />
            <button className={`${styles.btn} ${styles.osf}`}>SETTINGS</button>
        </div> 
        <div className={styles.box2}>
          <div className={styles.con}>
            <h1 className={`${styles.jas} ${styles.nf}`}>Jasmina Salvador</h1>
            <h3 className={`${styles.temp} ${styles.nf} ${styles.temp1}`}>School</h3>
            <h3 className={`${styles.temp1} ${styles.nf}`}>Courses Purchashed</h3>
            <h3 className={`${styles.temp1} ${styles.nf}`}>Date of Birth</h3>
            <h3 className={`${styles.temp1} ${styles.nf}`}>Contact Number</h3>
            <h3 className={`${styles.temp1} ${styles.nf}`}>Email Address</h3>
          </div>
          <div className={styles.con}>
            <h3 className={`${styles.temp} ${styles.osf} ${styles.temp1}`} >Homai School</h3>
            <h3 className={`${styles.temp1} ${styles.osf}`}>Beginner</h3>
            <h3 className={`${styles.temp1} ${styles.osf}`}>25 June 1986</h3>
            <h3 className={`${styles.temp1} ${styles.osf}`}>027 745 28 00</h3>
            <h3 className={`${styles.temp1} ${styles.osf}`}>jsalvador@homai.edu</h3>
          </div>
        </div>
      </div>
        <div className={styles.container1}>
        <NavLink className={`${styles.btn1} ${styles.nf}`}to='/project-library'>BACK TO PROJECTS</NavLink>
        <NavLink className={`${styles.btn2} ${styles.nf}`}to='/teacher-dashboard'>BACK TO DASHBOARD</NavLink>
        </div>
      <Footer/>
    </div>
  )
}

