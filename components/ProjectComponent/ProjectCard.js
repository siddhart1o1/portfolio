import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard(props) {
  return (
    <div className={styles.TOP}>
      <div className={styles.Container}>
        <div className={styles.Image}>
          <h1 className={styles.Title_phone}>{props.data.name}</h1>
          <img src={props.data.image} className={styles.RealImage} />
        </div>
        <div className={styles.Desc}>
          <h1 className={styles.Title}>{props.data.name}</h1>
          <p className={styles.info}>{props.data.description}</p>
          <p className={styles.worked}>{props.data.worked}</p>
          <div className={styles.link}>
            <a className={styles.Visit} href={props.data.link}>
              Visit{" "}
            </a>
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
