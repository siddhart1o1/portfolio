import React from "react";
import styles from "./ExperienceComponent.module.css";
import TimeLine from "./TimeLine";
export default function ExperienceComponent() {
  return (
    <div className={styles.TOP}>
      <div className={styles.Heading}>
        <h1>Experience</h1>
      </div>
      <div className={styles.Container}>
        <TimeLine />
      </div>
    </div>
  );
}
