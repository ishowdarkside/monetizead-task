import { useRestrict } from "../../hooks/useRestrict";
import Navbar from "../../ui/Navbar/Navbar";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";

export default function LoginPage(): JSX.Element {
  useRestrict();
  return (
    <>
      <Navbar />
      <section className={styles.sectionBody}>
        <div className="container">
          <span className={styles.pageRole}>Login</span>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
