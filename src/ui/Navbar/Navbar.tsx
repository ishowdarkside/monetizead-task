import styles from "./Navbar.module.scss";
import Logo from "./Logo";
import NavList from "./NavList";
import AuthNavigation from "./AuthNavigation";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <NavList />
          <AuthNavigation />
        </div>
      </div>
    </nav>
  );
}
