import React from "react";
import styles from "./TopTechGraph.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function TopTechGraph() {
    return (
      <div className={styles.TOP}>
        <div className={styles.COL1}>
          <div>React JS</div>
          <div>Next JS</div>
          <div>AWS</div>
          <div>Django</div>
          <div>SQL</div>
          <div>No SQL</div>
        </div>
        <div className={styles.COL2}>
          <div>Node JS</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Scikit Learn</div>
          <div>Tensorflow</div>
          <div>MongoDB</div>
        </div>
      </div>
    );
}
