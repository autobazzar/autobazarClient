export const BASE_URL = "http://localhost:3000";

export function GET(url, payload) {
  return fetch(`${BASE_URL}/${url}`, {
    method: "GET",
    ...payload,
  });
}
export function POST(url, payload) {
  return fetch(`http://localhost:5173/server/users/login-google`, {
    method: "POST",
  });
}

export function PATCH(url, payload) {
  return fetch(`${BASE_URL}/${url}`, {
    method: "PATCH",
    ...payload,
  });
}

export function DELETE(url, payload) {
  return fetch(`${BASE_URL}/${url}`, {
    method: "DELETE",
    ...payload,
  });
}
