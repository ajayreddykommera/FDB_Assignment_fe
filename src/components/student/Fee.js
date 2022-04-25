import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Fee = () => {
  const localstudent = JSON.parse(localStorage.getItem("student"));
  console.log("localstudent....", JSON.stringify(localstudent));
  const fee = localstudent.student_fee;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Fees</Typography>
      </div>
      <div>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              student_id
            </Typography>
            <Typography variant="h5" component="div">
              {fee.student_id}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              semester_No
            </Typography>
            <Typography variant="h5" component="div">
              {fee.semester_No}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              amount
            </Typography>
            <Typography variant="h5" component="div">
              $ {fee.amount}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              fee_status
            </Typography>
            <Typography variant="h5" component="div">
              {fee.fee_status ? "Paid" : "Not Paid"}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Fee;
