import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./components/views/home";
import About from "./components/views/about";
import StadiumView from "./components/views/stadiumView";
import AnouncementView from "./components/views/anouncementView";
import NotFound from "./components/views/notFound";
import CommingSoon from "./components/views/comingSoon";
import AchievementView from "./components/Achievement/achievemntView";
import News from "./components/views/news";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // This is your main layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/announcement",
        element: <AnouncementView />,
      },
      {
        path: "/rr-lxt-rink",
        element: <StadiumView />,
      },
      {
        path: "/achievement",
        element: <AchievementView />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/comming-soon",
        element: <CommingSoon />,
      },
    ],
  },
]);

export default router;
