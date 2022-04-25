import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Workshops = () => {
  const localInstructor = JSON.parse(localStorage.getItem("instructor"));
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Workshops</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localInstructor.workshops.map((a) => (
            <Grid item xs={6}>
              <Card sx={{ mixWidth: 225 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    workshop_subject
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.workshop_subject}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    workshop_date
                  </Typography>
                  <Typography variant="h5" component="div">
                    {new Date(a.workshop_date).toLocaleDateString()}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    workshop_id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.workshop_id}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    instructor_id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.instructor_id}
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

export default Workshops;
