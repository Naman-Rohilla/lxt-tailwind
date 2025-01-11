import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./components/views/home";
import About from "./components/views/about";
import StadiumView from "./components/views/stadiumView";

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
        path: "/anouncement",
        element: <About />,
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
