import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemButton from "@mui/material/ListItemButton";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const drawerWidth = 240;

export default function Layout({ children, ...pageProps }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            ONLINE LEARNING MANAGEMENT SYSTEM
          </Typography>
          <Button onClick={() => handleLogout()} style={{ color: "white" }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItemButton key={11} component="a" href="/student/dashboard">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
          <ListItemButton key={1} component="a" href="/student/courses">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Courses"} />
          </ListItemButton>
          <ListItemButton key={2} component="a" href="/student/assignments">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Assignments"} />
          </ListItemButton>
          <ListItemButton key={3} component="a" href="/student/grades">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Grades"} />
          </ListItemButton>
          <ListItemButton key={4} component="a" href="/student/forum">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Forum"} />
          </ListItemButton>
          <ListItemButton key={5} component="a" href="/student/exams">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Exams"} />
          </ListItemButton>
          <ListItemButton key={6} component="a" href="/student/workshops">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Workshops"} />
          </ListItemButton>
          <ListItemButton key={7} component="a" href="/student/fee">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Fee"} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
