import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

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

const UserService = {
  getUserById,
  updateUser,
};

export default UserService;