import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getGroups = () => {
    return axios.get(API_URL + "score/group", { headers: authHeader() });
}

const deleteGroup = () => {
    return axios.delete(API_URL + `score/group`, { headers: authHeader() });
}

const createGroup = (countGroup) => {
    return axios.post(API_URL + `score/group`, {countGroup}, { headers: authHeader() });
}

const updateProblem = (id, title, description) => {
    return axios.patch(API_URL + `score/group/${id}`, {
        title,
        description
    }, { headers: authHeader() });
}

const GroupService = {
    getGroups,
    deleteGroup,
    createGroup,
    updateProblem
};

export default GroupService;