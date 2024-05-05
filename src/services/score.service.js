import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getAllScores = () => {
    return axios.get(API_URL + "score/all", { headers: authHeader() });
}

const getScoreByIdUser = () => {
    return axios.get(API_URL + "score", { headers: authHeader() });
}
const ScoreService = {
 getAllScores,
 getScoreByIdUser,
}

export default ScoreService;