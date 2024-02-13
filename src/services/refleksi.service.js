import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getRefleksi = () => {
    return axios.get(API_URL + "refleksi", { headers: authHeader() });
}

const getRefleksiById = (id) => {
    return axios.get(API_URL + "refleksi/" + id, { headers: authHeader() });
}

const pushRefleksi = (id, questions) => {
    return axios.patch(API_URL + "refleksi/" + id, {
        questions
    }, { headers: authHeader() });
}


const RefleksiService = {
    getRefleksi,
    getRefleksiById,
    pushRefleksi
};

export default RefleksiService;