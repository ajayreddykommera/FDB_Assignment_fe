import {
  MenuItem,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AddDoctor = () => {
  return (
    <div>
      <Paper style={{ width: "500px", margin: "auto", marginTop: "10%" }}>
        <Grid
          container
          spacing={2}
          style={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Register Patient or Doctor Here
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth variant="outlined" label="Role">
              {["doctor", "patient", "admin"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained">Register</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AddDoctor;
