import { POST } from "./config";

const authToken = localStorage.getItem("jwt");

export async function registerUser(payload, googleFlag) {
  const url = "/users/sign-up";
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) }).then(
    (result) => result.data.payload
  );
}

export async function loginUser(payload, googleFlag) {
  const url = "/users/login";
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) });
}
