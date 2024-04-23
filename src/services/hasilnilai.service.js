import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getHasilNilaiPretest = () => {
    return axios.get(API_URL + "hasilnilai/pretest", { headers: authHeader() });
}

const getHasilNilaiPostest = () => {
    return axios.get(API_URL + "hasilnilai/postest", { headers: authHeader() });
}

const HasilNilaiService = {
    getHasilNilaiPretest,
    getHasilNilaiPostest,
};

export default HasilNilaiService;