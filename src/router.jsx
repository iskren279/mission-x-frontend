import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Main pages
import Home from "./pages/homePage/Homepage";
import Login from "./pages/loginSignup/LoginSignup";
import ProjectLibrary from "./pages/projectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/studentProfileViewer/StudentProfileViewer";

// Student dashboard pages
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import Instructions from "./pages/studentDashboard/instructions/Instructions";
import LearningObjectives from "./pages/studentDashboard/learningObjectives/LearningObjectives";
import MakeProject from "./pages/studentDashboard/makeProject/MakeProject";
import SubmitProject from "./pages/studentDashboard/submitProject/SubmitProject";
import VideoTutorial from "./pages/studentDashboard/videoTutorial/VideoTutorial";

// Teacher dashboard pages
import TeacherDashboard from "./pages/teacherDashboard/TeacherDashboard";
import TeacherProfileViewer from "./pages/teacherProfileViewer/TeacherProfileViewer.jsx";
import HelpRequests from "./pages/teacherDashboard/helpRequests/HelpRequests";
import ProgressTracker from "./pages/teacherDashboard/progressTracker/ProgressTracker";
import ProjectSubmissions from "./pages/teacherDashboard/projectSubmissions/ProjectSubmissions";
import StudentProfiles from "./pages/teacherDashboard/studentProfiles/StudentProfiles";

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
        path: "login",
        Component: Login,
      },

      {
        path: "project-library",
        Component: ProjectLibrary,
      },

      {
        path: "student-profile-viewer",
        Component: StudentProfileViewer,
      },

      {
        path: "teacher-profiles/:teacher_id",
        Component: TeacherProfileViewer,
      },

      // StudentDashboard is the layout component.
      // The child routes appear inside its <Outlet />.
      {
        path: "student-dashboard",
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

      // TeacherDashboard works the same way,
      // with pages rendered through its Outlet.
      {
        path: "teacher-dashboard",
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
