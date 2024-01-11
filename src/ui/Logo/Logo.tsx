import styles from "./Logo.module.scss";
export default function Logo(): JSX.Element {
  return (
    <h3 className={styles.logo}>
      Monetize<span>boot</span>
    </h3>
  );
}
