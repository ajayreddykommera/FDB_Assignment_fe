import { Navigate } from "react-router-dom";
import AddDoctor from "../components/admin/AddDoctor";
import Dashboard from "../components/admin/index";
import Layout from "../layouts/Adminlayout";

const adminRoutes = [
  { path: "/admin", element: <Navigate to="/admin/dashboard" /> },
  { path: "/login", element: <Navigate to="/admin/dashboard" /> },
  { path: "/signup", element: <Navigate to="/admin/dashboard" /> },
  { path: "/", element: <Navigate to="/admin/dashboard" /> },
  {
    path: "admin/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "add_doc_pat", element: <AddDoctor /> },
    ],
  },
];

export default adminRoutes;
