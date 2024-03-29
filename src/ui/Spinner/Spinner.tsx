import styles from "./Spinner.module.scss";

export default function Spinner(): JSX.Element {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}
