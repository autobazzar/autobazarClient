import { POST, GET, DELETE_AD } from "./config";
export async function registerUser(payload, googleFlag) {
  const url = "/users/sign-up";
  return await POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) })
}

export async function loginUser(payload, googleFlag) {
  const url = "/users/login";
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) });
}

export async function submitScore(payload) {
  const url = "/rates";
  return POST(url, payload);
}

export async function receiveAds() {
  const url = "/ads";
  return GET(url);
}

export async function receiveAd(id) {
  const url = `/ads/${id}`;
  return GET(url);
}

export async function deleteAd(id) {
  const url = `/ads/${id}`;
  return DELETE_AD(url);
}

export async function receiveAdScore(id) {
  const url = `/rates/${id}/average`;
  return GET(url);
}

export async function receiveNumberOfScores(id) {
  const url = `/rates/${id}/unique-users-count`;
  return GET(url);
}
export async function submitAds(payload) {
  //const url = "localhost:3000/ads";
  console.error(payload);
  const url = "/ads";
  return POST(url, payload);
}

export async function getByUrl(url) {
  return GET(url);
}


export async function receiveAdsById(id) {
  const url = `/ads/user/${id}`;
  return GET(url);
}