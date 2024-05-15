import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import "./Navbar.css";
import { Card } from "@mui/material";
import CardsServices from "./cards/CardsServices";
import CardsService2 from "./cards/CardsService2";
import CardsService3 from "./cards/CardsService3";

const drawerWidth = 240;
const navItems = ["Inicio", "Staff", "Servicios", "Contacto"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText />{" "}
              <Link style={{ fontFamily: '"Danfo", serif' }}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/00000altanticdev-removebg-preview.png?alt=media&token=933ef3e7-fc96-48ac-bd20-8a43858dceab"
            alt="logo"
            srcset=""
            style={{
              width: "5rem",
              height: "5rem",
              margin: "0px",
              padding: "0px",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {" "}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: "'Jaro', sans-serif",
                  fontSize: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "-100%",
                    backgroundColor: "lightblue", // Cambia a tu color deseado
                    zIndex: "-1",
                    transition: "left 0.3s ease-in-out",
                  },
                  "&:hover::before": {
                    left: "0",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          backgroundImage: `url('../../../../fondo-section2.jpg')`, // Reemplaza con la URL de tu imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          minWidth: "100vw", // Ajusta la altura según sea necesario
          opacity: "0.9",
        }}
      >
        <Toolbar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Home />

          <div style={{ width: "70%" }}></div>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",

            width: "100%",
            height: "100vh",
            background: "rgb(2,0,36)",
            backgroundImage:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,29,73,1) 35%, rgba(0,212,255,1) 100%)",
          }}
        >
          <div class="card card1" style={{ padding: "0px" }}>
            <CardsServices />
          </div>
          <div class="card card2" style={{ padding: "0px" }}>
            <CardsService2 />
          </div>
          <div class="card card3">
            <CardsService3 />
          </div>
        </div>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
