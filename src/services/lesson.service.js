import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getLessons = () => {
    return axios.get(API_URL + "lessons", { headers: authHeader() });
};

const getLessonById = (id) => {
    return axios.get(API_URL + `lessons/${id}`, { headers: authHeader() });
}

const createLesson = (title, content, images) => {
    return axios.post(API_URL + "lessons", {
        title,
        content,
        images,
    }, { headers: authHeader() });
}

const updateLesson = (id, title, content, images) => {
    return axios.put(API_URL + `lessons/${id}`, {
        title,
        content,
        images,
    }, { headers: authHeader() });
}

const deleteLesson = (id) => {
    return axios.delete(API_URL + `lessons/${id}`, { headers: authHeader() });
}

const LessonService = {
    getLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
};

export default LessonService;