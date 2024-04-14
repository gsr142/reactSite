import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx ={{ bgcolor: "#1557" }}>
        <Toolbar justifyContent="center">
          <Button href="/" color="inherit" sx={{ margin:"auto" }}>
            <Typography variant="h6">About</Typography>
          </Button>
          <Button href="/portfolio" color="inherit"sx={{ margin:"auto" }}>
          <Typography variant="h6">Portfolio</Typography>
          </Button>
          <Button href="/contact" color="inherit" sx={{ margin:"auto" }}>
          <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
