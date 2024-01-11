import styles from "./Navbar.module.scss";

import NavList from "./NavList";
import AuthNavigation from "./AuthNavigation";
import Logo from "../Logo/Logo";

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
