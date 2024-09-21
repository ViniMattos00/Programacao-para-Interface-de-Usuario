import styles from "./index.module.css";

export default function Menu() {
  return (
    <>
      <header className={styles.menuContainer}>
        <nav className={styles.menuNavbar}>
          <img
            className={styles.menuHamburgerIcon}
            src="./imgs/menu-hamburguer-icon.svg"
            alt="menu-hamburguer icon"
          />
          <img
            className={styles.menuClassroomIcon}
            src="./imgs/classroom-logo.svg"
            alt="classroom icon"
          />
          <t1 className={styles.menuTitle}>Google Sala de Aula</t1>
        </nav>
        <div className={styles.menuUser}>
          <img
            className={styles.menuAddIcon}
            src="./imgs/add-icon.svg"
            alt="add icon"
          />
          <img
            className={styles.menuAppsIcon}
            src="./imgs/apps-icon.svg"
            alt="add icon"
          />
          <img
            className={styles.menuUseraccountIcon}
            src="./imgs/user-account-icon.svg"
            alt="add icon"
          />
        </div>
      </header>
    </>
  );
}
