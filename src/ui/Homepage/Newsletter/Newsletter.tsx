import CTARedirect from "../../CTARedirect/CTARedirect";
import styles from "./Newsletter.module.scss";

export default function Newsletter(): JSX.Element {
  return (
    <section className={styles.sectionBody}>
      <div className="container">
        <h2>Looking for a Group Deal?</h2>
        <p>
          Walking groups, community groups or employee gifting - get in contact
          with us to get your discount on all bulk purchases.
        </p>
        <CTARedirect>Get in touch</CTARedirect>
      </div>
    </section>
  );
}
