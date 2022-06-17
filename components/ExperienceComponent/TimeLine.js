import React from "react";
import Card from "./Card";
import { Chrono } from "react-chrono";
import { Margin } from "@mui/icons-material";
import styles from './TimeLine.module.css'
export default function TimeLine() {
  const items = [
    {
      id: 1,
      title: "October 2021",
      card_Title: "I8labs",
      card_Subtitle: "Python, Backend and AWS Devloper",
      card_DetailedText: `Men of 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
      the British Expeditionary Force (BEF) 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
      wade out to..`,
      duration: "October 2021 - Present",
    },
    {
      id: 2,
      title: "July 2021",
      card_Title: "Unicorn Vision",
      card_Subtitle: "Python and Tkinter Devloper",
      card_DetailedText: `Men of the British 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
   nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
        Expeditionary Force (BEF) wade out to..`,
      duration: "July 2021 - October 2021",
    },
  ];

  return (
    <div>
      <div
        items={items}
        mode="VERTICAL"
        hideControls={true}
        useReadMore={false}
        className={styles.TOP}
      >
        {items.map((item) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </div>
    </div>
  );
}
