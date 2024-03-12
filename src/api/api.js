import { POST } from "./config";

const authToken = localStorage.getItem("jwt");

export async function registerUser(payload) {
  const result = await POST("sign-up", payload);
  console.error(result);
}

export async function loginUser(payload, googleFlag) {
  const url = googleFlag ? "users/login-google" : "users/login";
  console.error(payload, googleFlag);
  const result = await POST(url, payload);
  console.error(result);
}


