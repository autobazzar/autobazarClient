export const BASE_URL = "http://localhost:3000";

export function GET(url, payload) {
  return fetch(`${BASE_URL}${url}`, {
    method: "GET",
    ...payload,
  });
}
export async function POST(url, payload) {
  const body = JSON.stringify(payload);
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return await (
    await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers,
      body,
    })
  ).json();
}

export function PATCH(url, payload) {
  return fetch(`${BASE_URL}${url}`, {
    method: "PATCH",
    ...payload,
  });
}

export function DELETE(url, payload) {
  return fetch(`${BASE_URL}${url}`, {
    method: "DELETE",
    ...payload,
  });
}
