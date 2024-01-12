import { useNavigate } from "react-router-dom";
import CTARedirect from "../../CTARedirect/CTARedirect";
import styles from "./HeroSection.module.scss";

export default function HeroSection(): JSX.Element {
  const navigate = useNavigate();
  function redirectToShop() {
    navigate("/products");
  }
  return (
    <section className={styles.sectionBody}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>FRESH SALE </h1>
          <h2 className={styles.heading}>70% OFF ALL PRODUCTS</h2>
          <CTARedirect onClickHandler={redirectToShop}>SHOP NOW!</CTARedirect>
        </div>
      </div>
    </section>
  );
}
