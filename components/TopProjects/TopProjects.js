/* eslint-disable @next/next/no-img-element */
import React, { PureComponent } from "react";
import { Fragment } from "react";
import styles from "./styles/TopProject.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function TopProject(props) {
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  const { ref, inView } = useInView({ triggerOnce: true });
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0vw",
        transition: {
          type: "string",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-50vw",
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView1) {
      animation1.start({
        x: "0vw",
        transition: {
          type: "string",
          duration: 3,
          bounce: 0.3,
        },
        opacity: 1,
      });
    }
    if (!inView1) {
      animation1.start({
        x: "-60vw",
        opacity: 0,
      });
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: "0vw",
        transition: {
          type: "string",
          duration: 3,
          bounce: 0.3,
        },
        opacity: 1,
      });
    }
    if (!inView2) {
      animation2.start({
        x: "-25vw",
        opacity: 0,
      });
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      animation3.start({
        x: "0vw",
        transition: {
          type: "string",
          duration: 3,
          bounce: 0.3,
        },
        opacity: 1,
      });
    }
    if (!inView3) {
      animation3.start({
        x: "50vw",
        opacity: 0,
      });
    }
  }, [inView3]);

  return (
    <Fragment>
      <div className={styles.SVG}></div>
      <div className={styles.TOPPEST}>
        <div className={styles.TOP}>
          <div className={styles.container}>
            <motion.div
              ref={ref}
              animate={animation}
              className={styles.topProject}
            >
              <div className={styles.heading}>Projects</div>
              <div className={styles.heading1}>
                Some of my favorite projects on which I have worked.
              </div>
            </motion.div>

            <motion.div ref={ref1} animate={animation1} className={styles.Row1}>
              <div className={styles.Project1}>
                <img src="Test.png" className={styles.Project_image} />
                <div className={styles.Project_1_Content}>
                  <div className={styles.content}>
                    <h1 className={styles.content_Heading}>CRF</h1>
                    <div className={styles.content_para}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam deserunt culpa ducimus nostrum. Aperiam,
                        doloribus earum placeat sint perspiciatis officiis sequi
                        nam autem porro quae dolore maxime debitis natus
                        facilis?
                      </p>
                    </div>
                    <div>
                      <button className={styles.content_buttons}>VISIT</button>
                      <button className={styles.content_buttons}>
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.Project1}>
                <img src="Test.png" className={styles.Project_image} />
                <div className={styles.Project_1_Content}>
                  <div className={styles.content}>
                    <h1 className={styles.content_Heading}>CRF</h1>
                    <div className={styles.content_para}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam deserunt culpa ducimus nostrum. Aperiam,
                        doloribus earum placeat sint perspiciatis officiis sequi
                        nam autem porro quae dolore maxime debitis natus
                        facilis?
                      </p>
                    </div>
                    <div>
                      <button className={styles.content_buttons}>VISIT</button>
                      <button className={styles.content_buttons}>
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className={styles.Row2}>
              <motion.div
                ref={ref2}
                animate={animation2}
                className={styles.Row2_1st}
              >
                <div className={styles.Project3}>
                  <img src="Test.png" className={styles.Project_image} />
                  <div className={styles.Project_1_Content}>
                    <div className={styles.content}>
                      <h1 className={styles.content_Heading}>CRF</h1>
                      <div className={styles.content_para}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div>
                        <button className={styles.content_buttons}>
                          VISIT
                        </button>
                        <button className={styles.content_buttons}>
                          READ MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Project3}>
                  <img src="Test.png" className={styles.Project_image} />
                  <div className={styles.Project_1_Content}>
                    <div className={styles.content}>
                      <h1 className={styles.content_Heading}>CRF</h1>
                      <div className={styles.content_para}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div>
                        <button className={styles.content_buttons}>
                          VISIT
                        </button>
                        <button className={styles.content_buttons}>
                          READ MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref3}
                animate={animation3}
                className={styles.Row2_2nd}
              >
                <div className={styles.Project5}>
                  <img src="Test.png" className={styles.Project_image} />
                  <div className={styles.Project_1_Content}>
                    <div className={styles.content}>
                      <h1 className={styles.content_Heading}>CRF</h1>
                      <div className={styles.content_para}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam deserunt culpa ducimus nostrum. Aperiam,
                          doloribus earum placeat sint perspiciatis officiis
                          sequi nam autem porro quae dolore maxime debitis natus
                          facilis?
                        </p>
                      </div>
                      <div>
                        <button className={styles.content_buttons}>
                          VISIT
                        </button>
                        <button className={styles.content_buttons}>
                          READ MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
}
