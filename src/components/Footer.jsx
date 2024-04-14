import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, bgcolor: "#1557" }}
      >
        <Toolbar>
          <IconButton
            color="default"
            onClick={() => window.open("https://github.com/gsr142")}
            sx={{ margin: "auto" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gregory-richardson-7bb3a1280/"
              )
            }
            sx={{ margin: "auto" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open("https://www.instagram.com/gregorysrichardson/")
            }
            sx={{ margin: "auto" }}
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
