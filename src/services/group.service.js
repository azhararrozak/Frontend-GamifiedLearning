import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getGroups = () => {
    return axios.get(API_URL + "score/group", { headers: authHeader() });
}

const deleteGroup = () => {
    return axios.delete(API_URL + `score/group`, { headers: authHeader() });
}

const createGroup = (countGroup) => {
    return axios.post(API_URL + `score/group`, {countGroup}, { headers: authHeader() });
}

const GroupService = {
    getGroups,
    deleteGroup,
    createGroup
};

export default GroupService;