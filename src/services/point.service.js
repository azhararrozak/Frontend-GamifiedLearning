import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getPoint = (id) => {
    return axios.get(API_URL + `${id}/point`, { headers: authHeader() })
}

const getALlPoint = () => {
    return axios.get(API_URL + "point", { headers: authHeader() })
}

const PointService = {
    getPoint,
    getALlPoint,
}

export default PointService