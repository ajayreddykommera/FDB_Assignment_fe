import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Departments = () => {
  const localInstructor = JSON.parse(localStorage.getItem("instructor"));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Departments</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localInstructor.departments.map((a) => (
            <Grid item xs={6}>
              <Card sx={{ mixWidth: 225 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Department Name
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.department_name}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Instructor Id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.instructor_id}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Department Id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.department_id}
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

export default Departments;
