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
  const url = "/ads/create";
  // const response = await fetch(`http://localhost:3000/submitAds`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });
  // return response;
  return POST(url, { ...payload});
}
