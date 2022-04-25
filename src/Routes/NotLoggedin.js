import { Navigate } from "react-router-dom";
import React from "react";
import LoginPage from "../components/auth/Login";
import NotLoginLayout from "../layouts/NotLoggedinLayout";
import Error from "../components/Error/404";
const notLoggedinRoutes = [
  {
    path: "/",
    element: <NotLoginLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "404", element: <Error /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Navigate to="/login" /> },
    ],
  },
];

export default notLoggedinRoutes;
