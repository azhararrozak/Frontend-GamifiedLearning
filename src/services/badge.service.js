import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const addBadge = (id, postData) => {
    return axios.post(API_URL + `${id}/badge/add`, postData, { headers: authHeader() })
}

const getBadges = (id) => {
    return axios.get(API_URL + `${id}/badge`, { headers: authHeader() })
}

const BadgeService = {
    getBadges,
    addBadge,
}

export default BadgeService