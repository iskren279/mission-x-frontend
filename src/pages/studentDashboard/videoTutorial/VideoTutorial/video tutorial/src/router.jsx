import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import VideoTutorialPage from "./pages/studentDashboard/videoTutorial/VideoTutorial/video tutorial/src/VideoTutorialpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: VideoTutorialPage,
      },
      {
        path: "student-dashboard/video-tutorial",
        Component: VideoTutorialPage,
      },
    ],
  },
]);

export default router;
