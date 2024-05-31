import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = import.meta.env.VITE_BASE_API
const API_URL = `${BASE_URL}/api/`;

const getTasks = () => {
  return axios.get(API_URL + "tasks", { headers: authHeader() });
};

const getTaskById = (id) => {
  return axios.get(API_URL + `tasks/${id}`, { headers: authHeader() });
};

const createTask = (title, content, urlTask) => {
  return axios.post(
    API_URL + "tasks",
    {
      title,
      content,
      urlTask,
    },
    { headers: authHeader() }
  );
};

const updateTask = (id, title, content, urlTask) => {
  return axios.put(
    API_URL + `tasks/${id}`,
    {
      title,
      content,
      urlTask,
    },
    { headers: authHeader() }
  );
};

const deleteTask = (id) => {
  return axios.delete(API_URL + `tasks/${id}`, { headers: authHeader() });
};

const submitTask = (id, userId, urlFile) => {
  return axios.put(
    API_URL + `tasks/${id}/submit`,
    {
      userId,
      urlFile,
    },
    { headers: authHeader() }
  );
};

const getListSubmit = (id) => {
  return axios.get(API_URL + `tasks/${id}/submit`, { headers: authHeader() });
};

const setcompletedTask = (id, name, score) => {
  return axios.patch(
    API_URL + `tasks/${id}/completed`,
    {
      name,
      score,
    },
    { headers: authHeader() }
  );
};

const TaskService = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  submitTask,
  getListSubmit,
  setcompletedTask,
};

export default TaskService;
