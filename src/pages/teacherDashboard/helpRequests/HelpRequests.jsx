import React, { useState, useEffect } from "react";
import Footer from "../../projectLibrary/ProjectLibraryFooter";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import styles from "./helpRequest.module.css";
import HelpCard from "../../../sharedComponents/HelpCard";

export default function HelpRequests() {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/help")
      .then((res) => res.json())
      .then((data) => setHelp(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.box1}>
          <div className={styles.box2}>
            <div className={styles.box3}>
              <h5 className={styles.space}>Help Requests</h5>
              <button className={styles.btnSpace}>REPLY</button>
              <button className={styles.btnSpace1}>MARK AS DONE</button>
            </div>
            {help.map((student, id) => {
              const d = new Date(student.date_created);
              const options = {
                day: "numeric",
                month: "long",
                year: "numeric",
                weekday: "short",
              };
              const timeOptions = {
                hour: "numeric",
                minute: "numeric",
                hour12: "true",
              };
              let dateMade = d.toLocaleDateString("en-NZ", options);
              let timeMade = d.toLocaleTimeString("en-NZ", timeOptions);
              return (
                <div className={styles.checkbox} key={id}>
                  <div className={styles.card}>
                    <img
                      src={student.picture}
                      alt={student.name}
                      className={styles.inPic}
                    />
                    <h5 className={styles.inNameHelp}>
                      {student.name} Needs Help
                    </h5>
                    <h5 className={styles.inDate}>
                      {dateMade.toUpperCase()} {timeMade.toUpperCase()}
                    </h5>
                  </div>
                  <input className={styles.checkbox} type="checkbox" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
