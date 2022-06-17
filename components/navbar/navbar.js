import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";



const Hover = {
  scale: 1.3,
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

function NavBar(props) {
  const [isOpen, setOpen] = useState(false)
  const router = useRouter();
  function isActive(path) {
    if (router.pathname === path) {
      console.log(router.pathname);
      return styles.active;
    }
  }
  function openhamburger() {
    setOpen(!isOpen);
    console.log(isOpen);
  }


  return (
    <Fragment>
      <div className={styles.TOP}>
        <nav className={styles.nav}>
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
            className={styles.logo}
          >
            <Link href="/">
              <div>
                <p className={styles.Siddharth}>
                  <span className={styles.S}>SID</span>
                </p>
                <p className={styles.Tiwari}>
                  {/* <span className={styles.T}>T</span> */}
                </p>
              </div>
            </Link>
          </motion.div>

          <div className={isOpen ? styles.openedNavbar : styles.navLinks}>
            <Link href="/about">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ stiffness: 60 }}
                className={styles.Links}
              >
                <span className={isActive("/about")}>ABOUT</span>
              </motion.div>
            </Link>

            <Link href="/projects">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ stiffness: 60 }}
                className={styles.Links}
              >
                <span className={isActive("/projects")}>PROJECTS</span>
              </motion.div>
            </Link>

            <Link href="/experience">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ stiffness: 60 }}
                className={styles.Links}
              >
                <span className={isActive("/experience")}>EXPERIENCE</span>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ stiffness: 60 }}
                className={styles.Links}
              >
                <span className={isActive("/contact")}>CONTACT</span>
              </motion.div>
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <motion.div
              className={styles.LinkedInIcon}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ stiffness: 60 }}
              whileHover={Hover}
            >
              <LinkedInIcon />
            </motion.div>

            <motion.div
              className={styles.GithubIcon}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ stiffness: 60 }}
              whileHover={Hover}
            >
              <GitHubIcon />
            </motion.div>
          </div>
          <div
            onClick={openhamburger}
            className={isOpen ? styles.Openhamburger : styles.Hamburger}
          >
            <Hamburger />
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
