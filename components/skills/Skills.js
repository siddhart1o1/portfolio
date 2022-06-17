import React from "react";
import styles from "./Skills.module.css";
import { Parallax } from "react-scroll-parallax";
import LoopSlider from "./LoopSlider";
import MySkillBar from "./MySkillBar";
import FrontEndGraph from "./FrontEndGraph";
import TopTechGraph from "./TopTech";
export default function Skills() {
  return (
    <div className={styles.TOP_container}>
      <div className={styles.TOPDevider}></div>
      <div className={styles.TOPDevider2}></div>

      <div className={styles.TOP}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.mainHeading}>SKILLS</div>
            <div className={styles.secondHeading}> Stuff I know.</div>
          </div>
          <div className={styles.TopSection}>
            <p className={styles.description}>
              I Am A full Stack Devloper and a compitive Programer and I have
              worked on web technologies like React, Django, Node, Next.js and
              many more. I have also worked on Artifitcal Inteligence and
              Machine Learning and cloud technologies like AWS and Also worked
              on serverless Arhictectur using AWS lambda contact me to know more
              about what I can do.
            </p>
            <div className={styles.SkillGraph}>
              <MySkillBar></MySkillBar>
            </div>
          </div>
          <div className={styles.FrontEnd}>
            <div className={styles.ROW1}>
              {/* <div className={styles.COL1}>
                <div className={styles.COLHeadings}>Top Languages</div>
                <FrontEndGraph></FrontEndGraph>
              </div>

              <div className={styles.COL2}>
                <div className={styles.COLHeadings}>Recent Used Tech</div>
              </div> */}
            </div>
          </div>
          {/* <LoopSlider /> */}
        </div>
      </div>
    </div>
  );
}
