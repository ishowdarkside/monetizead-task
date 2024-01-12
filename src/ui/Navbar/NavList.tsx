import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useUserContext } from "../../context/userContext";

export default function NavList() {
  const { isLogged } = useUserContext();
  return (
    <ul>
      <NavLink to="/">
        {" "}
        <div className={styles.decor}></div>
        <span>Homepage</span>
      </NavLink>
      {isLogged && (
        <NavLink to="/products">
          {" "}
          <div className={styles.decor}></div>
          <span>All products</span>
        </NavLink>
      )}
      {isLogged && (
        <NavLink to="/sale">
          {" "}
          <div className={styles.decor}></div>
          <span>Sale</span>
        </NavLink>
      )}
      <NavLink to="/news">
        <div className={styles.decor}></div>
        <span>News!</span>
      </NavLink>
    </ul>
  );
}
