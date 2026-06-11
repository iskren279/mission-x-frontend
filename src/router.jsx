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
import VideoTutorial from "./pages/studentDashboard/videoTutorial/VideoTutorial";
import TeacherDashboard from "./pages/teacherDashboard/TeacherDashboard";
import HelpRequests from "./pages/teacherDashboard/helpRequests/HelpRequests";
import ProgressTracker from "./pages/teacherDashboard/progressTracker/ProgressTracker";
import ProjectSubmissions from "./pages/teacherDashboard/projectSubmissions/ProjectSubmissions";
import StudentProfiles from "./pages/teacherDashboard/studentProfiles/StudentProfiles";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                index: true,
                component: Home,
            }, 
            {
                path : "/login",
                component : Login,
            },
            {
                path : "/project-library",
                component : ProjectLibrary,
            },
            {
                path : "/student-profile-viewer",
                component : StudentProfileViewer,
            },
            {
                path : "/student-dashboard",
                component : StudentDashboard,
                children : [
                    {
                        index : true,
                        component : LearningObjectives,
                    },
                    {
                        path : "instructions",
                        component : Instructions,
                    },
                    {
                        path : "make-project",
                        component : MakeProject,
                    },
                    {
                        path : "submit-project",
                        component : SubmitProject,
                    },
                    {
                        path : "video-tutorial",
                        component : VideoTutorial,
                    },
                ],
            },
            {
                path : "/teacher-dashboard",
                component : TeacherDashboard,
                children : [
                    {
                        index : true,
                        component : ProgressTracker,
                    },
                    {
                        path : "help-requests",
                        component : HelpRequests,
                    },
                    {
                        path : "project-submissions",
                        component : ProjectSubmissions,
                    },
                    { 
                        path : "student-profiles",
                        component : StudentProfiles,
                    },
                ],
            },
        ],


    }
])

export default router;