import React, { useCallback, useEffect, useState } from "react";
import studentRoutes from "./Routes/studentRoutes";
import adminRoutes from "./Routes/adminRoutes";
import instructorRoutes from "./Routes/instructorRoutes";
import notLoggedRoutes from "./Routes/NotLoggedin";
import { useRoutes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation().pathname;
  const [route, setRoute] = useState([]);
  const studentRoute = useRoutes(studentRoutes);
  const adminRoute = useRoutes(adminRoutes);
  const notLoggedRoute = useRoutes(notLoggedRoutes);
  const instructorRoute = useRoutes(instructorRoutes);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [role, setRole] = useState(localUser ? localUser.account_role : "");
  const init = useCallback(async () => {
    if (role == "student") {
      setRoute(studentRoute);
    } else if (role == "instructor") {
      setRoute(instructorRoute);
    } else if (role == "admin") {
      setRoute(adminRoute);
    } else {
      setRoute(notLoggedRoute);
    }
  }, [localUser, location]);
  useEffect(() => {
    init();
  }, [localUser, location]);

  return <>{route}</>;
};
export default App;
