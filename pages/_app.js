import "../styles/globals.css";
import { Fragment } from "react";
import NavBar from "../components/navbar/navbar";
import mainHeroComponent from "../components/heroSection/mainherocomponent";
import Footer from "../components/Footer/FooterComponent";
import { useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const bgGradiant = `
  background-image: linear-gradient(to right, #08e6ea, #2af598, #ffea00);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  `;
  const white = `
  background:white;
  }
  `;

  return (
    <div>
      <style jsx global>{`
        body {
          ${router.pathname == "/" ? bgGradiant : white};
        }
      `}</style>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
