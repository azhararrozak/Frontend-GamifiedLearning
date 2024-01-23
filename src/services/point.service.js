import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

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