import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import styles from "./MobileBar.module.scss";

export default function MobileBar({
  setIsOpenBar,
}: {
  setIsOpenBar: (val: boolean) => void;
}): JSX.Element {
  const { isLogged, userData, setIsLogged, setUserData } = useUserContext();
  const navigate = useNavigate();
  return (
    <div className={styles.mobileBar}>
      <button onClick={() => setIsOpenBar(false)} className={styles.closeBar}>
        X
      </button>
      <Link to="/">Homepage</Link>
      <Link to="/products">Products</Link>
      <Link to="/sale">Sale</Link>
      <Link to="/">News</Link>

      {isLogged && (
        <div className={styles.authDiv}>
          <b>{userData.username}</b>
          <span>{userData.id}</span>
          <button
            onClick={() => {
              setIsLogged(false);
              setUserData({});
              localStorage.removeItem("jwt");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      )}

      {!isLogged && <Link to="/auth/login">Login</Link>}
    </div>
  );
}
