import React from "react";
import styles from "./FrontEndGraph.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function FrontEndGraph() {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <motion.div ref={ref} className={styles.TOP}>
      <div className={styles.container}>
        <p className={styles.Text}>Front End</p>
        <div className={inView ? styles.FrontEnd : styles.ALL}></div>
      </div>

      <div className={styles.container}>
        <p className={styles.Text}>Back End</p>
        <div className={inView ? styles.BackEnd : styles.ALL}></div>
      </div>

      <div className={styles.container}>
        <p className={styles.Text}>AI/ML</p>
        <div className={inView ? styles.AI : styles.ALL}></div>
      </div>

      <div className={styles.container}>
        <p className={styles.Text}>Coding</p>
        <div className={inView ? styles.GeneralCodeing : styles.ALL}></div>
      </div>

      <div className={styles.container}>
        <p className={styles.Text}>Cloud</p>
        <div className={inView ? styles.Cloud : styles.ALL}></div>
      </div>
    </motion.div>
  );
}
