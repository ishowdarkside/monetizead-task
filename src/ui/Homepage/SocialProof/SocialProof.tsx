import CTARedirect from "../../CTARedirect/CTARedirect";
import styles from "./SocialProof.module.scss";
export default function SocialProof(): JSX.Element {
  return (
    <section className={styles.sectionBody}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Stay Warm In Cold Days</h2>
          <CTARedirect>SHOP WINTER BOOTS</CTARedirect>
        </div>
      </div>
    </section>
  );
}
