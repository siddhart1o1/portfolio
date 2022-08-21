import React from "react";
import Card from "./Card";
import styles from './TimeLine.module.css'
export default function TimeLine() {
  const items = [
    {
      id: 1,
      title: "October 2021",
      card_Title: "I8labs",
      card_Subtitle: "Python, Backend and AWS Developer.",
      card_DetailedText: `Working on backend with serverless architecture using AWS lambda and 
      working on CRF and github resume project. 
      Created CRUD API using AWS lambda and api gateway. 
      Used third party API to fetch data and process the data to apply business logic.
      worked on crypto trading BOT for Auto-trading.
      worked on admin and main website features such as crypto trading contest, crypto analysis using twitter and news data.
      created flow to fetch data from github on github resume builder and process the data to display on frontend `,
      duration: "October 2021 - Present",
    },
    {
      id: 2,
      title: "July 2021",
      card_Title: "Unicorn Vision",
      card_Subtitle: "Python and Tkinter Developer.",
      card_DetailedText: `Created front-end of application using Python's Tkinter from scratch for a car dashboard application,
      implemented authentication and authorization.
      implemented multithreading to run background process like capturing users video using open-cv and uploading it to AWS S3.
      `,
      duration: "July 2021 - October 2021",
    },
  ];

  return (
    <div>
      <div
        className={styles.TOP}
      >
        {items.map((item) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </div>
    </div>
  );
}
