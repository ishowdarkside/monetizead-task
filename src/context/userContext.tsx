import { ReactNode, createContext, useContext, useState } from "react";
import { UserContextInterface, UserInterface } from "../types";

const context = createContext<UserContextInterface | null>(null);

export default function UserContext({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<UserInterface | object>({});

  return (
    <context.Provider value={{ isLogged, setIsLogged, userData, setUserData }}>
      {children}
    </context.Provider>
  );
}

export function useUserContext() {
  const data = useContext(context);
  if (!data) throw new Error("YOU CAN'T USE USER CONTEXT HERE");
  return data;
}
