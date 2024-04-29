import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getQuizzes = () => {
    return axios.get(API_URL + "quiz", { headers: authHeader() });
}

const getQuizById = (id) => {
    return axios.get(API_URL + `quiz/${id}`, { headers: authHeader() });
}

const getQuizByTitle = (title) => {
    return axios.get(API_URL + `quizbyname/${title}`, { headers: authHeader() });
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
    return axios.post(API_URL + `quiz/${id}/submitquiz`, {selectedAnswers}, { headers: authHeader() });
}

const submitPretest = (id, selectedAnswers) => {
    return axios.post(API_URL + `quiz/${id}/submitpretest`, {selectedAnswers}, { headers: authHeader() });
}

const submitPostest = (id, selectedAnswers) => {
    return axios.post(API_URL + `quiz/${id}/submitpostest`, {selectedAnswers}, { headers: authHeader() });
}

const checkPretestByIdUser = () => {
    return axios.get(API_URL + `quiz/pretest/cekpretes`, { headers: authHeader() });
}

const checkPostestByIdUser = () => {
    return axios.get(API_URL + `quiz/postest/cekpostes`, { headers: authHeader() });
}


const QuizService = {
    getQuizzes,
    getQuizById,
    getQuizByTitle,
    createQuiz,
    updateQuiz,
    deleteQuiz,
    submitQuiz,
    submitPretest,
    submitPostest,
    checkPretestByIdUser,
    checkPostestByIdUser
};

export default QuizService;