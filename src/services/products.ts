import axios from "axios";

const BASE_URL = `https://junior-test.mntzdevs.com`;

export async function getProducts() {
  const token = localStorage.getItem("jwt");

  try {
    const res = await axios.get(`${BASE_URL}/api/products/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response!.status === 403) {
        return null;
      }
    }
  }
}
