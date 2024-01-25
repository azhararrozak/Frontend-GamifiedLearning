import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getLessons = (id) => {
    return axios.get(API_URL + `units/${id}`, { headers: authHeader() });
};

const getLessonById = (id) => {
    return axios.get(API_URL + `lessons/${id}`, { headers: authHeader() });
}

const createLesson = (unitId, title, content, images, urlVideo) => {
    return axios.post(API_URL + "lessons", {
        unitId,
        title,
        content,
        images,
        urlVideo
    }, { headers: authHeader() });
}

const updateLesson = (id, title, content, images, urlVideo) => {
    return axios.put(API_URL + `lessons/${id}`, {
        title,
        content,
        images,
        urlVideo,
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