import { POST, GET } from "./config";
const authToken = localStorage.getItem("jwt");

export async function registerUser(payload, googleFlag) {
  const url = "/users/sign-up";
  return await POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) })
}

export async function loginUser(payload, googleFlag) {
  const url = "/users/login";
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) });
}

export async function receiveAds() {
  const url = "/ads";
  return GET(url);
}
