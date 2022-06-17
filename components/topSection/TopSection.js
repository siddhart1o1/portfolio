import React from "react";
import MainHeroComponent from "../heroSection/mainherocomponent";
import NavBar from "../navbar/navbar";
import styles from "./TopSection.module.css";
import Button from "../heroSection/AboutButton";
import { Fragment } from "react";



export default function TopSection() {
  return (
    <div>
      <div className={styles.topSection}>
        <MainHeroComponent />
      </div>
    </div>
  );
}
