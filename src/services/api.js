import axios from "axios";

const { REACT_APP_API_BASEURL } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_BASEURL,
});
