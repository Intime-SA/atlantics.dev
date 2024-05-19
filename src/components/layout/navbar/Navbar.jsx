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
import Footer from "./footer/Footer";

const drawerWidth = 240;
const navItems = ["Inicio", "Staff", "Servicios", "Contacto"];

function DrawerAppBar(props) {
  /*   const { window } = props;
   */ const [mobileOpen, setMobileOpen] = React.useState(false);

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

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const container = undefined;
  /*     window !== undefined ? () => window().document.body : undefined;
   */
  return (
    <Box
      sx={{ display: "flex", width: "100vw", padding: "0px", margin: "0px" }}
    >
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
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.3)"
              : "transparent", // Fondo semitransparente cuando se desplaza
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque cuando se desplaza
            WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque para Safari cuando se desplaza
            // Opcional: bordes redondeados
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/00000altanticdev-removebg-preview.png?alt=media&token=933ef3e7-fc96-48ac-bd20-8a43858dceab"
            alt="logo"
            srcset=""
            style={{
              width: "5rem",
              height: "5rem",
              margin: "5px",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "40%",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Link id="asd123" class="typography-animation">
                  <h2>{item}</h2>
                </Link>
              </Typography>
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
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "rgb(2,0,36)",
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,29,73,1) 35%, rgba(0,212,255,1) 100%)",

          /* backgroundImage: `url('../../../../fondo-section2.jpg')` */ // Reemplaza con la URL de tu imagen

          minHeight: "100vh",
          minWidth: "100vw", // Ajusta la altura según sea necesario
        }}
      >
        <Toolbar />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Home />
        </div>
        <div
          className="grupoCardsProfile"
          style={{
            margin: "0px",
            padding: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zoom: "0.9",

            width: "100%",
            height: "200vh",
          }}
        >
          <div class="card card2">
            <CardsServices />
          </div>
          <div class="card card1">
            <CardsService2 />
          </div>
          <div class="card card3">
            <CardsService3 />
          </div>
        </div>

        <div className="grupoCardsPadre">
          <div className="grupoCards">
            <div class="profile-card1" id="a1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd123.png?alt=media&token=a7dc2811-30cb-4713-b737-670e26f40437"
                alt="Ramiro Martin Arce"
              />
              <h1>Rodrigo Silva</h1>
              <h2>CTO - Cofounder</h2>
              <h3>Full-Stack Developer</h3>
            </div>
            <div class="profile-card2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/CambioUrl.png?alt=media&token=191540f4-4037-4a12-83ba-882cba7b5c10"
                alt="Ramiro Martin Arce"
              />
              <h1>Ramiro Martin Arce</h1>
              <h2>CEO - Cofounder</h2>
              <h3>Business Analyst</h3>
            </div>
          </div>
        </div>
        <div class="pre-container">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

              fontSize: "1.5rem",
            }}
          >
            <h1 className="fontRubikMonoOne2">
              Armamos tu
              <br />
              e-Commerce
              <br />
              <span style={{ color: "#AFFFFF" }}>PROPIO</span>
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="componentPesos">
                <div>
                  <span
                    id="componentPeso"
                    style={{
                      fontSize: "10vw",
                      color: "#a7ffff",
                      width: "5rem",
                      marginRight: "5rem",
                    }}
                    class="material-symbols-outlined"
                  >
                    attach_money
                  </span>
                </div>
                <div>
                  <h2 style={{ textAlign: "right" }}>
                    Integraciones con plataformas de Pago y Envio.
                  </h2>
                </div>
              </div>
              <div className="componentPesos">
                <div>
                  <h2>Servicio disponible 24hs! Sin intermediarios!</h2>
                </div>
                <div class="highlight-circle">
                  <span id="componentPeso2" class="material-symbols-outlined">
                    cloud
                  </span>
                </div>
              </div>
              <div className="componentPesos">
                <div>
                  <span
                    style={{ width: "5rem", marginRight: "5rem" }}
                    id="componentPeso3"
                    class="material-symbols-outlined"
                  >
                    monitoring
                  </span>
                </div>
                <div>
                  <h2 style={{ textAlign: "right" }}>
                    Acceso a informacion clave del negocio
                  </h2>
                </div>
              </div>
              <div className="componentPesos">
                <div>
                  <h2>Aplicaciones integradas a sus sistemas</h2>
                </div>
                <div class="highlight-circle">
                  <span id="componentPeso2" class="material-symbols-outlined">
                    <span class="material-symbols-outlined">qr_code_2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="container2"></div>
        </div>
        <div class="container">
          <div class="icon2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Brown_Minimalist_Store_Highlight_Covers-removebg-preview.png?alt=media&token=8cbdbe5b-2f89-43e2-a01f-bedf6ce60a2b"
              alt="Icono grande"
            />
          </div>
          <div class="icon">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Brown_Minimalist_Store_Highlight_Covers__1_-removebg-preview.png?alt=media&token=881cee28-6dea-412d-9e63-4a98259baa9d"
              alt="Icono grande"
            />
          </div>
          <div class="cards-container">
            <div class="cardJobs2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/desk.png?alt=media&token=c12ca57e-dacf-42da-8237-4b052d01b449"
                alt="Project 1"
                width="600px"
                style={{ padding: 0, margin: 0 }}
              />
            </div>
            <div class="cardJobs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd1232mobile.png?alt=media&token=2c97c53a-8c9a-416d-bf9d-30779cf25f94"
                alt="Project 1"
                width="200px"
                style={{ padding: 0, margin: 0 }}
                sizes="contain"
              />
            </div>
          </div>
        </div>
        <div class="pre-container4"></div>
        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
