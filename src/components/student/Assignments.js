import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Assignments = () => {
  const localstudent = JSON.parse(localStorage.getItem("student"));
  console.log("localstudent....", JSON.stringify(localstudent));
  const assignments = localstudent.student_assignments;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Assignments</Typography>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <Grid container spacing={3}>
            {assignments.map((a) => (
              <Grid item xs={6}>
                <Card sx={{ mixWidth: 225 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      assignment_title
                    </Typography>
                    <Typography variant="h5" component="div">
                      {a.assignment_title}
                    </Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      start_date
                    </Typography>
                    <Typography variant="h5" component="div">
                      {new Date(a.start_date).toLocaleDateString()}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      due_date
                    </Typography>
                    <Typography variant="h5" component="div">
                      {new Date(a.due_date).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Assignments;
