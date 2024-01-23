import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getBadges = (id) => {
    return axios.get(API_URL + `${id}/badge`, { headers: authHeader() })
}

const BadgeService = {
    getBadges,
}

export default BadgeService