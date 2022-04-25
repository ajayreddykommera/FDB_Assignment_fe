import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../../api";

const Index = () => {
  const [instructor, setInstructor] = useState([]);
  const getStudent = async () => {
    const res = await API(
      `/getInstructorDetails?instructor_id=${11223}`,
      "GET"
    ).catch((err) => alert(err.message));
    if (res) {
      console.log("res....", res);
      setInstructor(res);
      localStorage.setItem("instructor", JSON.stringify(res));
    }
  };

  useEffect(() => {
    getStudent();
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Welcome to Instructor dashboard</Typography>
      </div>

      {instructor ? (
        <>
          <Typography variant="h6">
            Name:<span style={{ color: "#6607bb" }}>{"Mark"}</span>
          </Typography>

          <Typography variant="h6">
            Instructor Id:{" "}
            <span style={{ color: "#6607bb" }}>{instructor.instructor_id}</span>
          </Typography>
          <Typography variant="h6">
            Email:
            <span style={{ color: "#6607bb" }}>
              {instructor.instructor_email}
            </span>
          </Typography>
          <Typography variant="h6">
            Phone No :
            <span style={{ color: "#6607bb" }}>
              {instructor.instructor_phone_number}
            </span>
          </Typography>
          <Typography variant="h6">
            Experience:
            <span style={{ color: "#6607bb" }}>
              {instructor.instructor_experience}
            </span>
          </Typography>
        </>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default Index;
