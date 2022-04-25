import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Students = () => {
  const localInstructor = JSON.parse(localStorage.getItem("instructor"));
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Students</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localInstructor.students.map((a) => (
            <Grid item xs={6}>
              <Card sx={{ mixWidth: 225 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    student_id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.student_id}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    student_name
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.student_name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    student_email
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.student_email}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    student_phone_number
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.student_phone_number}
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

export default Students;
