import { POST, GET } from "./config";

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
export async function submitAds(payload) {
  //const url = "localhost:3000/ads";
  const url = "/ads";
  return POST(url, { ...payload});
}
