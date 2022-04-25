import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Grades = () => {
  const localstudent = JSON.parse(localStorage.getItem("student"));
  console.log("localstudent....", JSON.stringify(localstudent));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Grades</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localstudent.student_grades.map((a) => (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    exam_no
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.exam_no}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    marks
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.marks}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    grade
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.grade}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Grades;
