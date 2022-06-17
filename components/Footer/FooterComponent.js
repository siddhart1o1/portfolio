import React from "react";
import styles from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.TOPDevider}></div>
      <div className={styles.TOP}>
        <div>© Siddharth Tiwari. All Rights Reserved.</div>
        <div>Devloped By Siddharth Tiwari </div>
        <div className={styles.Social}>
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
}
