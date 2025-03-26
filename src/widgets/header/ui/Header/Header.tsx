import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-row"]}>
        {/* <div className={styles["logo"]}>
          <img src="./logo.jpg" alt="logo" />
        </div> */}
        <div>
          <div className={styles["text"]}>
            Программный комлпекс для настройки устройств производства ООО "ИНТ"
          </div>
          <h2 className={styles["title"]}>INT CONFIG</h2>
        </div>
      </div>
      <div className={styles["header-message"]}>
        Добро пожаловать в наше приложение! Мы рады видеть вас среди наших
        пользователей и хотим, чтобы ваше взаимодействие с нашим сервисом было
        максимально комфортным и приятным.
      </div>
    </header>
  );
};
