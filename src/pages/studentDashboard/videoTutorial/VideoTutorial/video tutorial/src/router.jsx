import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import VideoTutorialPage from "./VideoTutorialPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: VideoTutorialPage,
      },
    ],
  },
]);

export default router;
