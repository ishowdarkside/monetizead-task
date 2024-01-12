export interface RegisterFormValues {
  username: string;
  password: string;
  repeatPassword: string;
  subscribeToNewsLetter: boolean;
  status: "active" | "inactive";
  gender: "male" | "female" | "other";
  yearOfBirth: Date;
}

export interface loginResponse {
  jwt: string;
}

export interface JWT {
  iat: number;
  exp: number;
  id: string;
  username: string;
}

export interface UserInterface {
  username?: string;
  id?: string;
}

export interface UserContextInterface {
  isLogged: boolean;
  setIsLogged: (val: boolean) => void;
  userData: UserInterface;
  setUserData: (data: UserInterface) => void;
}

export interface ProductInterface {
  name: string;
  price: number;
  linkedProducts?: { name: string; price: number };
}
