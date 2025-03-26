import { Auth } from "@/widgets/auth";
import { Fact } from "@/widgets/fact";
import { Header } from "@/widgets/header";
import { DemoMode } from "@/widgets/demoMode";
import styles from "./styles.module.css";

export const WelcomePage = () => {
  return (
    <div className="container">
      <section className={styles["welcome-page"]}>
        <Header />
        <Auth />
        <Fact />
        <DemoMode />
      </section>
    </div>
  );
};
