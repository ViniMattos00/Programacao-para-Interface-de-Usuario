import styles from "./index.module.css";

export default function MenuLateral({ open }) {
  return (
    <div className={styles.menuLateral}>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/home.svg"
          alt="home"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Início</p>}
      </a>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/calendar.svg"
          alt="calendar"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Agenda</p>}
      </a>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/auto_stories.svg"
          alt="auto_stories"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Turmas</p>}
      </a>
      <div className={styles.divider}></div>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/group.svg"
          alt="group"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Estudantes</p>}
      </a>
      <div className={styles.divider}></div>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/school.svg"
          alt="school"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Minhas inscrições</p>}
      </a>
      <div className={styles.divider}></div>
      <a href="" className={styles.containerIcon}>
        <img 
          src="./imgs/settings.svg"
          alt="school"
          className={styles.iconMenu} />
          {open && <p className={styles.descriptionTurma}>Turmas Arquivadas</p>}
      </a>
    </div>
  );
}
