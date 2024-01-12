import { RegisterFormValues, loginResponse } from "../types";
import axios from "axios";
import { getBirthYear } from "../utilities/helpers";
const BASE_URL = `https://junior-test.mntzdevs.com`;

//REGISTER SERVICE

export async function registerService(formData: RegisterFormValues) {
  try {
    const res = await axios.post(`${BASE_URL}/api/register/`, {
      ...formData,
      yearOfBirth: getBirthYear(formData.yearOfBirth),
    });

    if (res.status === 201) {
      const loginResponse = await loginService(
        formData.username,
        formData.password
      );

      if (loginResponse?.status === "success")
        return { status: "success", message: "Registered successfully!" };
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { status: "fail", message: err.response?.data.message };
    }
  }
}

//LOGIN SERVICE

export async function loginService(username: string, password: string) {
  try {
    const res = await axios.post<loginResponse>(`${BASE_URL}/api/login/`, {
      username,
      password,
    });

    if (res.status === 200) {
      localStorage.setItem("jwt", res.data.jwt);
      return { status: "success", message: "Logged in successfully!" };
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response!.status === 401 || err.response!.status === 400)
        return { status: "fail", message: "Invalid credentials" };
    }
  }
}
