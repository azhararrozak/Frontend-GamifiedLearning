import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/";

const getTasks = () => {
  return axios.get(API_URL + "tasks", { headers: authHeader() });
};

const getTaskById = (id) => {
  return axios.get(API_URL + `tasks/${id}`, { headers: authHeader() });
};

const createTask = (title, content) => {
  return axios.post(
    API_URL + "tasks",
    {
      title,
      content,
    },
    { headers: authHeader() }
  );
};

const updateTask = (id, title, content) => {
  return axios.put(
    API_URL + `tasks/${id}`,
    {
      title,
      content,
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

const setcompletedTask = (id, name) => {
  return axios.patch(
    API_URL + `tasks/${id}/completed`,
    {
      name,
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
