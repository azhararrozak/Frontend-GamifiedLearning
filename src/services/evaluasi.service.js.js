import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getEvaluasi = () => {
    return axios.get(API_URL + "evaluasi", { headers: authHeader() });
}

const getEvaluasiById = (id) => {
    return axios.get(API_URL + "evaluasi/" + id, { headers: authHeader() });
}

const pushEvaluasi = (id, ketua, kelompok, content) => {
    return axios.patch(API_URL + "evaluasi/" + id, {
        ketua,
        kelompok,
        content
    }, { headers: authHeader() });
}

const EvaluasiService = {
    getEvaluasi,
    getEvaluasiById,
    pushEvaluasi
};

export default EvaluasiService;