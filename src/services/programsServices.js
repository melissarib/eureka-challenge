import { api } from "./api";

const { REACT_APP_API_BASEURL } = process.env;

const requestHeader = (token) => {
  return {
    headers: {
      "x-access-token": token,
    },
  };
};

export const getProgramsById = (token, id) =>
  api.get(`${REACT_APP_API_BASEURL}/programs/${id}`, requestHeader(token));

export const getLevelsProgramsById = (token, id) =>
  api.get(`${REACT_APP_API_BASEURL}/programs/${id}/levels`, requestHeader(token));

export const getLevelsById = (token, id) =>
  api.get(`${REACT_APP_API_BASEURL}/levels/${id}`, requestHeader(token));

export const Programs = {
  getProgramsById,
  getLevelsProgramsById,
  getLevelsById,
};
