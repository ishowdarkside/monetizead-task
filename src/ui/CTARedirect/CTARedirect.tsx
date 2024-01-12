import { ReactNode } from "react";
import styles from "./CTARedirect.module.scss";

export default function CTARedirect({
  children,
  onClickHandler,
}: {
  children: ReactNode;
  onClickHandler?: () => void;
}): JSX.Element {
  return (
    <button className={styles.btn} onClick={onClickHandler}>
      {children}
    </button>
  );
}
