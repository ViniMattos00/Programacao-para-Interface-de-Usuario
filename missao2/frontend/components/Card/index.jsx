import React from "react";
import styles from "./Card.module.css"; // Importar o arquivo CSS para estilização

export default function Card({ title, imageUrl, description }) {
  return (
    <div className={styles.cardContainer}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>
    </div>
  );
}
