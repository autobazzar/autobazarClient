import { POST } from "./config";

export async function registerUser(payload, googleFlag) {
  const url = "/users/sign-up";
  return await POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) })
}

export async function loginUser(payload, googleFlag) {
  const url = "/users/login";
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) });
}