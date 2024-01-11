import CTARedirect from "../../CTARedirect/CTARedirect";
import styles from "./HeroSection.module.scss";

export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.sectionBody}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>FRESH SALE </h1>
          <h2 className={styles.heading}>70% OFF ALL PRODUCTS</h2>
          <CTARedirect>SHOP NOW!</CTARedirect>
        </div>
      </div>
    </section>
  );
}
