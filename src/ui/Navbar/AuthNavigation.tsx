import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { useGetUserData } from "../../hooks/useGetUserData";

export default function AuthNavigation() {
  useGetUserData();
  const { isLogged, userData, setIsLogged, setUserData } = useUserContext();

  function logoutHandler() {
    localStorage.removeItem("jwt");
    setUserData({});
    setIsLogged(false);
  }
  return (
    <div className={styles.authWrapper}>
      {!isLogged && (
        <Link to="/auth/login" className={styles.loginBtn}>
          Login
        </Link>
      )}
      {isLogged && (
        <div className={styles.userInfo}>
          <b>{userData.username}</b>
          <span>{userData.id}</span>
        </div>
      )}

      {isLogged && (
        <button className={styles.logoutBtn} onClick={logoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
}
