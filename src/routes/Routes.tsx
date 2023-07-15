import Home from "../Home";
import type { RouteObject } from "react-router-dom";
import Layout from "../Layout";
import Courses from "../Courses";
import Register from "../Register";
import Course from "../Course";
import NoMatch from "../NoMatch";
import {
  createBrowserRouter
} from "react-router-dom";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "course",
        element: <Course />,
       
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "coursesIndex",
            element: <CoursesIndex />,
          },
          {
            path: "course",
            element: <Course />,
          },
        ],
      }
     
    ],
  }
]
const router = createBrowserRouter(routes);

export default router;