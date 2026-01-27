import { fetchAPI } from "../lib/api";
import { LoginCredentials, LoginRespon } from "../types";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginRespon> => {
  const res = await fetchAPI<LoginRespon>("/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (res.token) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
  }

  return res;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
