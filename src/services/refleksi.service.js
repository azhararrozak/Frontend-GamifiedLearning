import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

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