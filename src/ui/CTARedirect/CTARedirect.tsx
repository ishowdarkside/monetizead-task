import { ReactNode } from "react";
import styles from "./CTARedirect.module.scss";

export default function CTARedirect({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <button className={styles.btn}>{children}</button>;
}
