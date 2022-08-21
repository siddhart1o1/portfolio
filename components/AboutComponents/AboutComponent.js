import React from "react";
import styles from "./AboutComponent.module.css";

export default function AboutComponent() {
  return (
    <div className={styles.TOP}>
      <div className={styles.Container}>
        <h1 className={styles.Heading}>About Me! </h1>
        <div className={styles.Desc}>
          <p>
            Hello I am Siddharth Tiwari currently living in India and persuing
            my B.Tech from shri vaishnav vidyapeeth vishwavidyalaya.
          </p>
          <p>
            Well-organised person, problem solver, and a Student. I like to learn new technologies and create new applications.
          </p>
          <p>
            Interested in the AI and ML and working on ambitious
            projects with positive people.
          </p>
        </div>
      </div>
    </div>
  );
}
