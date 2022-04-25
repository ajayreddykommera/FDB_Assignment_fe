import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Exams = () => {
  const localstudent = JSON.parse(localStorage.getItem("student"));
  console.log("localstudent....", JSON.stringify(localstudent));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Exams</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localstudent.student_exams.map((a) => (
            <Grid item xs={4}>
              <Card sx={{ minWidth: 225 }}>
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
                    exam_date
                  </Typography>
                  <Typography variant="h5" component="div">
                    {new Date(a.exam_date).toLocaleDateString()}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    exam_name
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.exam_name}
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

export default Exams;
