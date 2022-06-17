import Link from "next/link";
import Fragment from "react";
import TopProjects from "../components/TopProjects/TopProjects";
import Skills from "../components/skills/Skills";
import TopSection from "../components/topSection/TopSection";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "../styles/index.module.css";
import Footer from "../components/Footer/FooterComponent";
function HomePage(props) {
  return (
    <div>
      <div>
        <TopSection />
      </div>
      <div className={styles.homePage}>
        <TopProjects />
        <ParallaxProvider>
          <Skills />
        </ParallaxProvider>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
