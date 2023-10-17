import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardContent from "./components/Dashboard/DashboardContent";
import CourseContent from "./components/Dashboard/CourseContent";
import TasksContent from "./components/Dashboard/TasksContent";
import SettingsContent from "./components/Dashboard/SettingsContent";
import CpatpContent from "./components/Dashboard/CpatpContent";
import LessonContent from "./components/Dashboard/LessonContent";
import LessonDetail from "./components/Lesson/LessonDetail";
import ListTask from "./components/Tasks/ListTask";
import DetailTask from "./components/Tasks/DetailTask";
import ListTaskSubmit from "./components/Tasks/ListTaskSubmit";
import QuizContent from "./components/Dashboard/QuizContent";

function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<DashboardContent />} />{" "}
          {/* Ini adalah rute utama */}
          <Route path="course" element={<CourseContent />} >
            <Route index element={<CpatpContent />} />
            <Route path="lesson" element={<LessonContent />}>
              <Route path=":lessonId" element={<LessonDetail />} />
            </Route>
          </Route>
          {/* Ini adalah rute untuk konten kursus */}
          <Route path="quiz" element={<QuizContent />} />
          <Route path="tasks" element={<TasksContent />}>
            <Route index element={<ListTask />} />
            <Route path="list" element={<ListTaskSubmit />} />
            <Route path=":taskId" element={<DetailTask />} />
          </Route>
          {/* Ini adalah rute untuk konten tugas */}
          <Route path="settings" element={<SettingsContent />} />{" "}
          {/* Ini adalah rute untuk konten pengaturan */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
