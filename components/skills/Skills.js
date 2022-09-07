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
      <div className={styles.TOP}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.mainHeading}>Skills</div>
            <div className={styles.secondHeading}> Stuff I know.</div>
          </div>
          <div className={styles.TopSection}>
            <p className={styles.description}>
              I Am A Full Stack Developer and a competitive Programmer and I
              have worked on technologies like React, Django, Node, Next.js and
              many more. I have also worked on Machine Learning, Deep Learning
              and AWS.
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
