import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isValidJWT } from "../utilities/helpers";
import { useEffect } from "react";
import { JWT } from "../types";

export function useRestrict() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) return;
    if (isValidJWT(token)) {
      const decoded: JWT = jwtDecode(token);
      if (decoded.username) return navigate("/");
    }
  }, [token, navigate]);
}
