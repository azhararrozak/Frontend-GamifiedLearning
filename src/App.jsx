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
import PretestContent from "./components/Dashboard/PretestContent";
import PostestContent from "./components/Dashboard/PostestContent";
import EvaluasiContent from "./components/Dashboard/EvaluasiContent";
import CreateQuiz from "./components/Dashboard/CreateQuiz";
import ListQuiz from "./components/Quiz/ListQuiz";
import DetailQuiz from "./components/Quiz/DetailQuiz";
import Playground from "./components/Dashboard/Playground";
import Discuss from "./components/Dashboard/Discuss";
import GroupContent from "./components/Dashboard/GroupContent";
import StudyGroup from "./components/Group/StudyGroup";
import Problem from "./components/Group/Problem";
import Unit from "./components/Lesson/Unit";
import ListEvalRef from "./components/EvalRefleksi/ListEvalRef";
import EvalDetailPage from "./components/EvalRefleksi/EvalDetailPage";
import RefDetailPage from "./components/EvalRefleksi/RefDetailPage";

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
          <Route path="pretest" element={<PretestContent />} />{" "} {/* Ini adalah rute untuk konten pretest */}
          <Route path="postest" element={<PostestContent />} />{" "} {/* Ini adalah rute untuk konten postest */}
          <Route path="study_group" element={<GroupContent />} >
            <Route index element={<StudyGroup />} />
            <Route path=":groupId" element={<Problem />} />
          </Route>{" "} {/* Ini adalah rute untuk konten study group */}
          <Route path="discus" element={<Discuss />} />{" "} {/* Ini adalah rute untuk konten discuss */}
          <Route path="evaluasi" element={<EvaluasiContent />}>
            <Route index element={<ListEvalRef />} />
            <Route path=":evalId" element={<EvalDetailPage />} />
            <Route path="refleksi/:refId" element={<RefDetailPage />} />
          </Route> {/* Ini adalah rute untuk konten evaluasi */}
          <Route path="create_quiz" element={<CreateQuiz />} />{" "} {/* Ini adalah rute untuk konten create quiz ""} */}
          {/* Ini adalah rute utama */}
          <Route path="course" element={<CourseContent />} >
            <Route index element={<Unit />} />
            <Route path=":unitId" element={<LessonContent />}>
              <Route path=":lessonId" element={<LessonDetail />} />
            </Route>
          </Route>
          {/* Ini adalah rute untuk konten kursus */}
          <Route path="quiz" element={<QuizContent />}>
            <Route index element={<ListQuiz />} />
            <Route path=":quizId" element={<DetailQuiz />} />
          </Route>

          <Route path="playground" element={<Playground />} />{" "}
          
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
