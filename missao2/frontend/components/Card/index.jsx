import styles from "./index.module.css";

export default function Card({ nome, descricao = '', urlImg = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{nome}</h2>
        <p className={styles.cardDescription}>{descricao}</p>
        <img className={styles.cardImage} src={urlImg} alt="Foto usuário" />
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
