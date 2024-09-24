import styles from "./index.module.css";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>teste</h2>
        <p className={styles.cardDescription}>teste</p>
        <img className={styles.cardImage} src="" alt="" />
      </div>
      <div className={styles.cardBody}></div>
      <div className={styles.cardFooter}>
        <img
          className={styles.trendingIcon}
          src="./imgs/trending_icon.svg"
          alt="trending icon"
        />
        <img
          className={styles.folderIcon}
          src="./imgs/folder_icon.svg"
          alt="folder icon"
        />
      </div>
    </div>
  );
}
