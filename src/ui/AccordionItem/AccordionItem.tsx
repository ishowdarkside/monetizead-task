import { ReactNode, useState } from "react";
import styles from "./AccordionItem.module.scss";
import carretIcon from "../../assets/chevron-down.png";

interface PropTypes {
  question: string;
  children: ReactNode;
}

export default function AccordionItem({ question, children }: PropTypes) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.accordionItem} ${isActive ? styles.activeTab : ""}`}
      onClick={() => setIsActive((curr) => !curr)}
    >
      <div className={styles.questionWrapper}>
        <h3>{question}</h3>
        <img
          src={carretIcon}
          alt="carret icon"
          className={isActive ? styles.rotateCarrot : ""}
        />
      </div>

      <p>{children}</p>
    </div>
  );
}
