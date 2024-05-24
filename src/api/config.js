export const BASE_URL = "http://localhost:3000";
import axios from "axios";
import { toast } from "react-toastify";
import { prettyString } from "../utils/prettyString";

export function GET(url) {
  return axios
      .get(`${BASE_URL}${url}`)
      .catch((err) => {
       
      });
  ;
}
export async function POST(url, payload) {
  const body = payload;
  return axios
    .post(`${BASE_URL}${url}`, body)
    .then((response) => response.data)
    .catch((err) => {
      const { message } = err.response.data;
      toast.error(prettyString(message));
      throw err;
    });
}

export function PATCH(url, payload) {
  return axios.patch(`${BASE_URL}${url}`, {
    ...payload,
  });
}

export function DELETE(url, payload) {
  return axios.delete(`${BASE_URL}${url}`, {
    ...payload,
  });
}
