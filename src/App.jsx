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
import ProfilPengembang from "./components/Dashboard/ProfilPengembang";
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
import HasilNilaiContent from "./components/Dashboard/HasilNilaiContent";
import HasilNilai from "./components/HasilNilai/HasilNilai";
import HasilNilaiPretest from "./components/HasilNilai/HasilNilaiPretest";
import HasilNilaiPostest from "./components/HasilNilai/HasilNilaiPostest";
import CreateProblem from "./components/Dashboard/CreateProblem";
// import PertemuanContent from "./components/Pertemuan/PertemuanContent";
// import Pertemuan from "./components/Pertemuan/Pertemuan";
// import CreateUnit from "./components/Pertemuan/CreateUnit";
// import CreateRefleksi from "./components/Pertemuan/CreateRefleksi";
// import CreateEvaluasi from "./components/Pertemuan/CreateEvaluasi";

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
          <Route path="pretest" element={<PretestContent />} />{" "}
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
          <Route path="create_problem" element={<CreateProblem />} />{" "}
          <Route path="create_problem" element={<CreateProblem />} />{" "}
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
          <Route path="pengembang" element={<ProfilPengembang />} />{" "}
          <Route path="hasilnilai" element={<HasilNilaiContent />}>
            <Route index element={<HasilNilai />} />
            <Route path="pretest" element={<HasilNilaiPretest />} />
            <Route path="postest" element={<HasilNilaiPostest />} />
          </Route>

          {/* <Route path="pertemuan" element={<PertemuanContent />} >
            <Route index element={<Pertemuan />} />
            <Route path="unit" element={<CreateUnit />} />
            <Route path="evaluasi" element={<CreateEvaluasi />} />
            <Route path="refleksi" element={<CreateRefleksi />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
