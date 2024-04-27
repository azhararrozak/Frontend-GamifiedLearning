import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getProblem = () => {
    return axios.get(API_URL + "problem", { headers: authHeader() });
}

const getProblemById = (id) => {
    return axios.get(API_URL + `problem/${id}`, { headers: authHeader() });
}

const createProblem = (title, description) => {
    return axios.post(
        API_URL + "problem",
        {
            title,
            description,
        },
        { headers: authHeader() }
    )
}

const ProblemService = {
    getProblem,
    getProblemById,
    createProblem,
}

export default ProblemService;