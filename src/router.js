import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home from "./components/views/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // This is your main layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "movie",
      //   element: <Movie />,
      // },
    ],
  },
]);

export default router;
