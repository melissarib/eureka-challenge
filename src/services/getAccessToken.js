import { api } from "./api";

const { REACT_APP_API_BASEURL, REACT_APP_API_APP_ID } = process.env;

export const getToken = () =>
  api.post(`${REACT_APP_API_BASEURL}/auth`, {
    headers: {
      "x-app-id": REACT_APP_API_APP_ID,
    },
  });

export const Auth = {
  getToken,
};
