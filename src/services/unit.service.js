import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

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
