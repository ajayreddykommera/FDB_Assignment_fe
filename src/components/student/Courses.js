import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Courses = () => {
  const localstudent = JSON.parse(localStorage.getItem("student"));
  console.log("localstudent....", JSON.stringify(localstudent));
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Courses</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localstudent.student_courses.map((a) => (
            <Grid item xs={6}>
              <Card sx={{ mixWidth: 225 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Course Name
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.course_name}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Course Duration
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.course_duration}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Course Id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.course_id}
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

export default Courses;
