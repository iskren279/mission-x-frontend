import styles from '../pages/teacherDashboard/helpRequests/helpRequest.module.css'

function HelpCard() {
  return (
    <div className={styles.checkbox}>
    <div className={styles.card}>HelpCard</div>
    <input className={styles.checkbox} type='checkbox' />
    </div>
  )
}
export default HelpCard