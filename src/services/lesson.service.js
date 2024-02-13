import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

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

const postComment = (id, user, comment) => {
    return axios.patch(API_URL + `lessons/${id}/comment`, {
        user,
        comment,
    },{ headers: authHeader() })
}

const LessonService = {
    getLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
    postComment,
};

export default LessonService;