import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getUnits = () => {
  return axios.get(API_URL + "units", { headers: authHeader() });
};

const getUnitsById = (id) => {
  return axios.get(API_URL + `units/${id}`, { headers: authHeader() });
};

const UnitService = {
  getUnits,
  getUnitsById,
};

export default UnitService;
