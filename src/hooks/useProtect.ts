import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { isValidJWT } from "../utilities/helpers";
import { useEffect } from "react";
import { JWT } from "../types";

export function useProtect() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) return navigate("/auth/login");
    if (!isValidJWT(token)) return navigate("/auth/login");
    const decoded: JWT = jwtDecode(token);
    if (!decoded.username) return navigate("/auth/login");
  }, [navigate, token]);
}
