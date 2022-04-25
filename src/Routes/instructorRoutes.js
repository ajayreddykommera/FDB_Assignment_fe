import { Navigate } from "react-router-dom";
import Dashboard from "../components/instructor/index";
import Departments from "../components/instructor/Departments";
import Layout from "../layouts/InstructorLayout";
import Students from "../components/instructor/Students";
import Surveys from "../components/instructor/Surveys";
import Workshops from "../components/instructor/Workshops";
const adminRoutes = [
  { path: "/instructor", element: <Navigate to="/instructor/dashboard" /> },
  { path: "/login", element: <Navigate to="/instructor/dashboard" /> },
  { path: "/signup", element: <Navigate to="/instructor/dashboard" /> },
  { path: "/", element: <Navigate to="/instructor/dashboard" /> },
  {
    path: "instructor/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "departments", element: <Departments /> },
      { path: "surveys", element: <Surveys /> },
      { path: "workshops", element: <Workshops /> },
      { path: "students", element: <Students /> },
    ],
  },
];

export default adminRoutes;
