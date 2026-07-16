import { useState, useEffect } from 'react';
import styles from '../pages/teacherDashboard/helpRequests/helpRequest.module.css'

function HelpCard() {

  return (
    <div className={styles.checkbox}>
    <div className={styles.card}>
      <h5 className={styles.inPic}>Picture</h5>
      {/* <h5 className={styles.inNameHelp}>{help.name} Needs Help</h5> */}
      <h5 className={styles.inDate}>TUE 28 April 2020 10:43</h5>
    </div>
    <input className={styles.checkbox} type='checkbox' />
    </div>
  )
}
export default HelpCard