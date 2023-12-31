import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getQuizzes = () => {
    return axios.get(API_URL + "quiz", { headers: authHeader() });
}

const getQuizById = (id) => {
    return axios.get(API_URL + `quiz/${id}`, { headers: authHeader() });
}

const getQuizByTitle = (title) => {
    return axios.get(API_URL + `quiz/${title}`, { headers: authHeader() });
}

const createQuiz = (quiz) => {
    return axios.post(API_URL + "quiz", quiz
    , { headers: authHeader() });
}

const updateQuiz = (id, quiz) => {
    return axios.put(API_URL + `quiz/${id}`, quiz, { headers: authHeader() });
}

const deleteQuiz = (id) => {
    return axios.delete(API_URL + `quiz/${id}`, { headers: authHeader() });
}

const submitQuiz = (id, selectedAnswers) => {
    return axios.post(API_URL + `quiz/${id}/submit`, {selectedAnswers}, { headers: authHeader() });
}

const QuizService = {
    getQuizzes,
    getQuizById,
    getQuizByTitle,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    submitQuiz
};

export default QuizService;