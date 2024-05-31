import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getUserById = (id) => {
  return axios.get(API_URL + `users/${id}`, { headers: authHeader() });
};

const updateUser = (id, urlProfile, address, phone, school) => {
  return axios.put(API_URL + `users/${id}`, {
    urlProfile,
    address,
    phone,
    school,
  }, { headers: authHeader() });
};

const deleteUser = (id) => {
  return axios.delete(API_URL + `users/${id}`, { headers: authHeader() });
};

const updatePassword = (id, password) => {
  return axios.put(API_URL + `users/${id}/password`, {
    password,
  }, { headers: authHeader() });
};

const UserService = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updatePassword,
};

export default UserService;