import React from "react";
import { Navigate } from "react-router-dom";
import Workshops from "../components/instructor/Workshops";
import Assignments from "../components/student/Assignments";
import Courses from "../components/student/Courses";
import Exams from "../components/student/Exams";
import Fee from "../components/student/Fee";
import Grades from "../components/student/Grades";
import Dashboard from "../components/student/index";
import Layout from "../layouts/StudentLayout";

const patientRoutes = [
  { path: "/student", element: <Navigate to="/student/dashboard" /> },
  // { path: "/student/dashboard", element: <Navigate to="/student/dashboard" /> },
  { path: "/login", element: <Navigate to="/student/dashboard" /> },
  { path: "/signup", element: <Navigate to="/student/dashboard" /> },
  { path: "/", element: <Navigate to="/student/dashboard" /> },
  {
    path: "student/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "courses", element: <Courses /> },
      { path: "assignments", element: <Assignments /> },
      { path: "grades", element: <Grades /> },
      { path: "forum", element: <Dashboard /> },
      { path: "exams", element: <Exams /> },
      { path: "semester", element: <Dashboard /> },
      { path: "fee", element: <Fee /> },
      { path: "workshops", element: <Workshops /> },
    ],
  },
];

export default patientRoutes;
