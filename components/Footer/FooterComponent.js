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
          <a href="https://in.linkedin.com/in/siddharth-tiwari-10baa1178?trk=public_profile_browsemap">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/siddhart1o1">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
