import React from "react";
import styles from "./ContactMe.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export default function ContactMe() {
  const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [emailSent, setEmailSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    const form_data =  form.current
    setEmailSent(true);

    emailjs
      .sendForm(
        "service_yllpbmv",
        "template_ls08cb5",
        form_data,
        "vxyvpgBIu6GmFVHXG"
      )
      .then(
        (result) => {

          setTimeout(() => {
            setEmailSent(false);
          }, 6000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.TOP}>
      <div className={styles.Heading}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.Container}>
        <div className={styles.InfoContainer}>
          <div className={styles.desc}>
            <p>
              Hi I am Siddharth Tiwari I am a Software Engineer based out of
              India madhya,pradesh feel free to drop your message and i will
              react out to you and please follow me on these platform.
            </p>
          </div>
          <div className={styles.Logos}>
            <LinkedInIcon />
            <GitHubIcon />
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>

        {/* form container starrts */}
        <div className={styles.FormContainer}>
          {emailSent ? (
            <h1 className={styles.Thanks}>Thanks! I will Reach out to you As soon as I can</h1>
          ) : (
            <form ref={form} onSubmit={sendEmail} className={styles.Form}>
              <input
                className={styles.formInput}
                type="text"
                placeholder="Please Enter your Name"
                name="from_name"
                ref={nameRef}
              />
              <input
                className={styles.formInput}
                type="email"
                placeholder="Your E-Mail Address"
                name="email"
                ref={emailRef}
              />
              <textarea
                className={styles.formInput}
                id="message"
                placeholder="Your Message"
                rows="4"
                cols="50"
                name="message"
                ref={messageRef}
              ></textarea>
              <div>
                <input type="submit" value="Send" className={styles.bn62} />
              </div>
            </form>
          )}
          {/* form end*/}
        </div>
        {/* form container ends */}
      </div>
    </div>
  );
}
