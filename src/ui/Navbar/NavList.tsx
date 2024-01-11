import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function NavList() {
  return (
    <ul>
      <NavLink to="/">
        {" "}
        <div className={styles.decor}></div>
        <span>Homepage</span>
      </NavLink>
      <NavLink to="/products">
        {" "}
        <div className={styles.decor}></div>
        <span>All products</span>
      </NavLink>
      <NavLink to="/sale">
        {" "}
        <div className={styles.decor}></div>
        <span>Sale</span>
      </NavLink>
      <NavLink to="/news">
        <div className={styles.decor}></div>
        <span>News!</span>
      </NavLink>
    </ul>
  );
}
