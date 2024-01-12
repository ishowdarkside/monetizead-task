import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { AxiosResponse } from "axios";

export async function useCheckExpiredToken(
  input: undefined | string | AxiosResponse,
  isLoading: boolean,

  isRefetching: boolean
) {
  const navigate = useNavigate();
  const { setIsLogged, setUserData } = useUserContext();

  useEffect(() => {
    if (!isLoading && !input && !isRefetching) {
      localStorage.removeItem("jwt");
      setIsLogged(false);
      setUserData({});
      return navigate("/auth/login");
    }
  }, [input, isLoading, setIsLogged, setUserData, navigate, isRefetching]);
}
