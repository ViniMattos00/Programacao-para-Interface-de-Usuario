import React, { useState } from "react";
import styles from "./index.module.css";

export default function ButtonAdd() {
  const [data, setData] = useState({ message: "hello, server!" });

  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/receive_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("success:", result);
      } else {
        console.error("error:", response.statusText);
      }
    } catch (error) {
      console.error("fetch error:", error);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.addNewCardButton} onClick={handleButtonClick}>
        <img
          className={styles.addNewCardButtonImg}
          src="./imgs/add-icon.svg"
          alt="add icon"
        />
      </button>
    </div>
  );
}
