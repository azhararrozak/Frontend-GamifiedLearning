import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getHistoryChat = () => {
    return axios.get(API_URL + "chat", { headers: authHeader() });
}

const ChatService = {
    getHistoryChat
};

export default ChatService;