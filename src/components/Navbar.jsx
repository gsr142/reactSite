import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button href="/" color="inherit">
            <Typography variant="h6">About</Typography>
          </Button>
          <Button href="/portfolio" color="inherit">
          <Typography variant="h6">Portfolio</Typography>
          </Button>
          <Button href="/contact" color="inherit">
          <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
