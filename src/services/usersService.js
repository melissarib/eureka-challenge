import { api } from "./api";

const { REACT_APP_API_BASEURL } = process.env;

// header API
const requestHeader = (token) => {
  return {
    headers: {
      "x-access-token": token,
    },
  };
};

// get all user
export const getUsers = (token) =>
  api.get(`${REACT_APP_API_BASEURL}/users`, requestHeader(token));

// get user by id
export const getUsersById = (token, id) =>
  api.get(`${REACT_APP_API_BASEURL}/users/${id}`, requestHeader(token));

// get user activities by id
export const getActivitiesUsersById = (token, id) =>
  api.get(`${REACT_APP_API_BASEURL}/users/${id}/activities`, requestHeader(token));

export const Users = {
  getUsers,
  getUsersById,
  getActivitiesUsersById,
};
