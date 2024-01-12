import { useNavigate } from "react-router-dom";
import CTARedirect from "../../CTARedirect/CTARedirect";
import styles from "./SocialProof.module.scss";
export default function SocialProof(): JSX.Element {
  const navigate = useNavigate();
  function redirectToShop() {
    navigate("/products");
  }
  return (
    <section className={styles.sectionBody}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Stay Warm In Cold Days</h2>
          <CTARedirect onClickHandler={redirectToShop}>
            SHOP WINTER BOOTS
          </CTARedirect>
        </div>
      </div>
    </section>
  );
}
