import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await API(
      `/getUserDetails?userName=${userName}&passWord=${password}`,
      "GET"
    ).catch((err) => alert(err.message));
    if (res) {
      console.log("res....", JSON.stringify(res));
      localStorage.setItem("user", JSON.stringify(res));
      history("/");
    }
  };
  return (
    <div>
      <Paper style={{ width: "500px", margin: "auto", marginTop: "15%" }}>
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
              Login Here
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained" onClick={() => handleSubmit()}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
