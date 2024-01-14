import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isValidJWT } from "../utilities/helpers";
import { useEffect } from "react";
import { JWT } from "../types";
import { useUserContext } from "../context/userContext";

export function useProtect() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const { setIsLogged, setUserData } = useUserContext();

  useEffect(() => {
    if (!token) return navigate("/auth/login");
    if (!isValidJWT(token)) {
      setIsLogged(false);
      setUserData({});
      return navigate("/auth/login");
    }
    const decoded: JWT = jwtDecode(token);
    if (!decoded.username) {
      setIsLogged(false);
      setUserData({});
      return navigate("/auth/login");
    }
  }, [navigate, token, setIsLogged, setUserData]);
}
