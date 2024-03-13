import { POST } from "./config";

const authToken = localStorage.getItem("jwt");

export async function registerUser(payload, googleFlag) {
  const url = googleFlag ? "/users/sign-up-google" : "/users/sign-up";
  return POST(url, payload);
}

export async function loginUser(payload, googleFlag) {
  const url = googleFlag ? "/users/login-google" : "/users/login";
  try {
    return POST(url, payload);
  } catch (e) {
    console.error(e);
  }
}
