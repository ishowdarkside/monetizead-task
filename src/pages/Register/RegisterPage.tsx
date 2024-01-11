import Navbar from "../../ui/Navbar/Navbar";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.scss";

export default function RegisterPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <section className={styles.sectionBody}>
        <div className="container">
          <span className={styles.pageRole}>Register</span>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
