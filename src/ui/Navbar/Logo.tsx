import styles from "./Navbar.module.scss";

export default function Logo() {
  return (
    <h3 className={styles.logo}>
      Monetize<span>boot</span>
    </h3>
  );
}
