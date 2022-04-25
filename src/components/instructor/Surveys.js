import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Surveys = () => {
  const localInstructor = JSON.parse(localStorage.getItem("instructor"));
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Surveys</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Grid container spacing={3}>
          {localInstructor.surveys.map((a) => (
            <Grid item xs={6}>
              <Card sx={{ mixWidth: 225 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    survey_id
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.survey_id}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    survey_topic
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.survey_topic}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    survey_active
                  </Typography>
                  <Typography variant="h5" component="div">
                    {a.survey_active ? "Active" : "Closed"}
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

export default Surveys;
