import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../../api";

const Index = () => {
  const [student, setStudent] = useState([]);
  const getStudent = async () => {
    const res = await API(
      `/getStudentDetails?student_id=${12345}`,
      "GET"
    ).catch((err) => alert(err.message));
    if (res) {
      console.log("res....", res);
      setStudent(res);
      localStorage.setItem("student", JSON.stringify(res));
    }
  };

  useEffect(() => {
    getStudent();
  }, [student]);
  return (
    <div>
      {student ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4">Welcome to Student dashboard</Typography>
          </div>
          <Typography variant="h6">
            Name:
            <span style={{ color: "#6607bb" }}>{student.student_name}</span>
          </Typography>
          <Typography variant="h6">
            Student Id:
            <span style={{ color: "#6607bb" }}>{student.student_id}</span>
          </Typography>
          <Typography variant="h6">
            Email:
            <span style={{ color: "#6607bb" }}>{student.student_email}</span>
          </Typography>
          <Typography variant="h6">
            Phone No :
            <span style={{ color: "#6607bb" }}>
              {student.student_phone_number}
            </span>
          </Typography>
          <Typography variant="h6">
            Address:
            <span style={{ color: "#6607bb" }}>{student.student_address}</span>
          </Typography>
        </>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default Index;
