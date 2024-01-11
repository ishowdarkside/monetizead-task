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
