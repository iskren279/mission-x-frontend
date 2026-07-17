import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./pages/homePage/Homepage";
import Login from "./pages/loginSignup/LoginSignup";
import ProjectLibrary from "./pages/projectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/studentProfileViewer/StudentProfileViewer";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import Instructions from "./pages/studentDashboard/instructions/Instructions";
import LearningObjectives from "./pages/studentDashboard/learningObjectives/LearningObjectives";
import MakeProject from "./pages/studentDashboard/makeProject/MakeProject";
import SubmitProject from "./pages/studentDashboard/submitProject/SubmitProject";
import VideoTutorial from "./VideoTutorialpage.jsx";
import TeacherDashboard from "./pages/teacherDashboard/TeacherDashboard";
import TeacherProfileViewer from "./pages/teacherProfileViewer/TeacherProfileViewer.jsx";
import HelpRequests from "./pages/teacherDashboard/helpRequests/HelpRequests";
import ProgressTracker from "./pages/teacherDashboard/progressTracker/ProgressTracker";
import ProjectSubmissions from "./pages/teacherDashboard/projectSubmissions/ProjectSubmissions";
import StudentProfiles from "./pages/teacherDashboard/studentProfiles/StudentProfiles";
// >>>>>>>>>>>SPEECH<<<<<<<<<<<<<
const router = createBrowserRouter([
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/project-library",
        Component: ProjectLibrary,
      },
      {
        path: "/student-profile-viewer",
        Component: StudentProfileViewer,
      },
      {
        path: "/teacher-profiles/:teacher_id",
        Component: TeacherProfileViewer,
      },
      {
        path: "/student-dashboard",
        Component: StudentDashboard,
        children: [
          {
            index: true,
            Component: LearningObjectives,
          },
          {
            path: "instructions",
            Component: Instructions,
          },
          {
            path: "make-project",
            Component: MakeProject,
          },
          {
            path: "submit-project",
            Component: SubmitProject,
          },
          {
            path: "video-tutorial",
            Component: VideoTutorial,
          },
        ],
      },
      {
        path: "/teacher-dashboard",
        Component: TeacherDashboard,
        children: [
          {
            index: true,
            Component: ProgressTracker,
          },
          {
            path: "help-requests",
            Component: HelpRequests,
          },
          {
            path: "project-submissions",
            Component: ProjectSubmissions,
          },
          {
            path: "student-profiles",
            Component: StudentProfiles,
          },
        ],
      },
    ],
  },
]);
        ],
      },
      {
        path: "/teacher-dashboard",
        Component: TeacherDashboard,
        children: [
          {
            index: true,
            Component: ProgressTracker,
          },
          {
            path: "help-requests",
            Component: HelpRequests,
          },
          {
            path: "project-submissions",
            Component: ProjectSubmissions,
          },
          {
            path: "student-profiles",
            Component: StudentProfiles,
          },
        ],
      },
    ],
  },
]);

export default router;
