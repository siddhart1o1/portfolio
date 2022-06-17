import styles from "./styles/mainherocomponent.module.css";
import Button from "./AboutButton";
import { Fragment } from "react";
import { motion } from "framer-motion";
function MainHeroComponent(props) {
  const heading = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <div className={styles.TOP}>
      <div className={styles.hero}>
        <div className={styles.HEADING}>
          <motion.div
            animate={heading.visible}
            initial={heading.hidden}
            transition={{ duration: 1 }}
            className={styles.HI}
          >
            <p>
              Hello, I am <span className={styles.text}>Siddharth</span>
            </p>
          </motion.div>
        </div>
        <motion.div
          animate={heading.visible}
          initial={heading.hidden}
          transition={{ duration: 2 }}
          className={styles.subHeading}
        >
          <p>A Student</p>
          <p>AI enthusiast </p>
          <p>Software Engineer</p>
        </motion.div>
        <div className={styles.button_div}>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default MainHeroComponent;
