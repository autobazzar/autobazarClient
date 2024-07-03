import { POST, GET, DELETE_AD, PATCH } from "./config";
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

export async function isGoogle(id) {
  const url = `/users/${id}/isRegisteredByGoogle`;
  return GET(url);
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
  
  const url = "/ads";
  return POST(url, payload);
}

export async function editAd(payload, id) {

  const url = `/ads/${id}`;
  return PATCH(url, payload);
}

export async function editUser(payload, id) {

  const url = `/users/${id}`;
  return PATCH(url, payload);
}


export async function getByUrl(url) {
  return GET(url);
}

export async function receiveAdsById(id) {
  const url = `/ads/user/${id}`;
  return GET(url);
}

export async function getAllUsers(){
  return GET('/admin/all-users');
}

export async function getAds(){
  return GET('/admin/ads-with-average-rate');
}