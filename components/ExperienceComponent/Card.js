import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
  return (
    <div className={styles.TOP}>
      <p className={styles.title}>{props.data.card_Title}</p>
      <p className={styles.subtitle}>{props.data.card_Subtitle}</p>
      <p className={styles.desc}>{props.data.card_DetailedText}</p>
      <h1 className={styles.duration}>{props.data.duration}</h1>
    </div>
  );
}
