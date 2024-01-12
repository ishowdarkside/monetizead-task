import { useEffect } from "react";
import { isValidJWT } from "../utilities/helpers";
import { JWT } from "../types";
import { jwtDecode } from "jwt-decode";
import { useUserContext } from "../context/userContext";

export function useGetUserData() {
  const token = localStorage.getItem("jwt");
  const { setIsLogged, setUserData } = useUserContext();

  useEffect(() => {
    if (!token) return;
    if (isValidJWT(token)) {
      const decoded: JWT = jwtDecode(token);
      if (decoded.username) {
        //Ako na decodedu postoji username, user je ulogovan, update state
        setIsLogged(true);
        setUserData(decoded);
      }
    }
  }, [token, setIsLogged, setUserData]);
}
