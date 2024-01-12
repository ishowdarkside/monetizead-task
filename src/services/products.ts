import axios from "axios";
import DJson from "dirty-json";

const BASE_URL = `https://junior-test.mntzdevs.com`;

export async function getProducts() {
  const token = localStorage.getItem("jwt");

  try {
    const res = await axios.get(`${BASE_URL}/api/products/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 200) {
      const formated = DJson.parse(res.data);
      return formated;
    }

    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response!.status === 403) {
        return null;
      }
    }
  }
}
