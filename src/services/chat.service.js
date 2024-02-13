import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getHistoryChat = () => {
    return axios.get(API_URL + "chat", { headers: authHeader() });
}

const ChatService = {
    getHistoryChat
};

export default ChatService;