import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./components/views/home";
import About from "./components/views/about";
import StadiumView from "./components/views/stadiumView";
import AnouncementView from "./components/views/anouncementView";

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
      // {
      //   path: "movie",
      //   element: <Movie />,
      // },
    ],
  },
]);

export default router;
