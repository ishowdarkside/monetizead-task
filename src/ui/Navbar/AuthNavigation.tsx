import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/cart.svg";
import UserIcon from "../../assets/user.svg";

export default function AuthNavigation() {
  return (
    <div className={styles.authWrapper}>
      <Link to="/auth/login">
        <img src={UserIcon} alt="user" />
      </Link>
      <Link to="/cart">
        <img src={CartIcon} alt="cart" />
      </Link>
    </div>
  );
}
