import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectCard(props) {
  return (
    <div className={styles.TOP}>
      <div className={styles.Container}>
        <div className={styles.Image}>
          <h1 className={styles.Title_phone}>{props.data.name}</h1>
          <LazyLoadImage
            src={props.data.image}
            className={styles.RealImage}
            alt="project image"
          />
        </div>
        <div className={styles.Desc}>
          <div className={styles.titleContainer}>
            <h1 className={styles.Title}>{props.data.name}</h1>
          </div>
          <p className={styles.info}>{props.data.description}</p>
          <p className={styles.worked}>{props.data.worked}</p>
          <div className={styles.link}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Visit}
              href={props.data.link}
            >
              Visit
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.data.github_link}>
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
