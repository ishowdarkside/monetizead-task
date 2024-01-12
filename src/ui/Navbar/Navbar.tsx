import styles from "./Navbar.module.scss";

import NavList from "./NavList";
import AuthNavigation from "./AuthNavigation";
import Logo from "../Logo/Logo";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import MobileBar from "./MobileBar";

export default function Navbar(): JSX.Element {
  const [isOpenMobileView, setIsOpenMobileView] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.wrapper}>
            <Logo />
            <NavList />
            <AuthNavigation />
            <button
              className={styles.mobileBurger}
              onClick={() => setIsOpenMobileView((curr) => !curr)}
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
      </nav>
      {isOpenMobileView && <MobileBar setIsOpenBar={setIsOpenMobileView} />}
    </>
  );
}
