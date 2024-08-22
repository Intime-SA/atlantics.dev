import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import "./Navbar.css";
import { FormControlLabel, Switch, Tooltip } from "@mui/material";
import Footer from "./footer/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import FooterSeccion from "./footer/FooterSeccion";
import CardsEmpleados from "../../pages/cardsEmpleados/CardsEmpleados";
import CardsEmpleadosMobile from "../../pages/cardsEmpleados/CardsEmpleadosMobile";
import MobileCards from "./MobileCards";

const drawerWidth = 240;
const navItems = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Staff", url: "/staff" },
  { nombre: "Contacto", url: "/contacto" },
];

function DrawerAppBar(props) {
  const theme = useTheme();

  const navigate = useNavigate();

  /*   React.useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor según tu necesidad

    if (isMobile) {
      navigate("/staff");
    }
  }, []); */

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  /*   const { window } = props;
   */ const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className="drawer"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100vh" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.nombre} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText />{" "}
              <Link to={item.url}>
                <h2>{item.nombre}</h2>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [isScrolled2, setIsScrolled2] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsScrolled2(true);
      } else {
        setIsScrolled2(false);
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

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Añadir un pequeño retraso para la animación
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Ajusta el tiempo de retraso

    return () => clearTimeout(timer);
  }, []);

  const words = "Your trusted partners in transformative times".split(" ");
  console.log(words);

  return (
    <Box
      sx={{
        display: "flex",
        width: "0vw",
        padding: "0px",
        margin: "0px",
        justifyContent: "center",
        width: "50vw",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)",
          width: "40vw",
          borderRadius: "50px",
          marginTop: isMobile ? "10rem" : "3rem",
          position: "fixed", // Fija la toolbar en una posición
          top: isScrolled && isMobile ? "-15%" : "0%",
          left: isMobile ? "45%" : "30%", // Centra horizontalmente
          transform: "translate(-50%, -50%)", // Ajusta para que quede realmente centrada
        }}
      >
        <Toolbar
          style={{
            backgroundImage:
              isScrolled &&
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)",

            height: "10vh",
            width: isMobile ? "50vw" : "80vw",
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.3)"
              : "transparent", // Fondo semitransparente cuando se desplaza
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque cuando se desplaza
            WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque para Safari cuando se desplaza
            borderRadius: "40px",
            position: "fixed", // Fija la toolbar en una posición
            top: "50%", // Centra verticalmente
            left: "0%",

            // Opcional: bordes redondeados
          }}
        >
          {isVisible && (
            <div>
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
                  alt="logo"
                  srcSet=""
                  className="logo-img"
                  style={{
                    width: isScrolled && isMobile ? "8rem" : "12rem",
                  }}
                />
              </Link>
              {!isScrolled && isMobile && (
                <Typography
                  variant="body1"
                  className={`text-container ${
                    isMobile
                      ? "text-container-mobile"
                      : "text-container-desktop"
                  }`}
                  gutterBottom
                >
                  <h2 className="header">
                    <span className="word1">Your</span>&nbsp;
                    <span className="word2">trusted</span>&nbsp;
                    <span className="word3">partners</span>&nbsp;
                    <span className="word4">in</span>&nbsp;
                    <span className="word5">transformative</span>&nbsp;
                    <span className="word6">times</span>
                  </h2>
                </Typography>
              )}
            </div>
          )}

          {isVisible && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: isMobile ? "100%" : "40%",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.nombre}
                  sx={{
                    fontSize: "2rem",
                    position: "relative",
                    opacity: isVisible ? 1 : 0, // Cambia la opacidad de 0 a 1
                    transition:
                      "opacity 2s ease-in-out, transform 2s ease-in-out",
                    transform: isVisible ? "translateY(0)" : "translateY(10px)", // Desplazamiento vertical más leve
                  }}
                >
                  <Link to={item.url} id="asd123">
                    <h2>{item.nombre}</h2>
                  </Link>
                </Typography>
              ))}
              {/*               {isMobile && (
                <div>
                  <Button onClick={() => handleDrawerToggle()}>
                    <span class="material-symbols-outlined">menu</span>
                  </Button>
                </div>
              )} */}
              {/* {!isSmallDesktop && (
                <div
                  style={{
                    width: "1%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div></div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview.png?alt=media&token=42352698-e9e7-4f9c-9f6f-fc268b44a25a"
                    alt=""
                    style={{
                      width: "100%px",
                    }}
                  />

                  <Tooltip title="Language">
                    <FormControlLabel control={<Switch checked={false} />} />
                  </Tooltip>

                  <img
                    style={{
                      width: "50px",
                      borderRadius: "80%",
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview%20(2).png?alt=media&token=0c0069c6-87fa-45c6-8334-5991b5a577ff"
                    alt=""
                    srcset=""
                  />
                </div>
              )} */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className="drawer"
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
              backgroundColor: "#212020",
              backgroundImage:
                "linear-gradient(315deg, #212020 32%, #30638a 100%)",
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
          alignItems: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          padding: 0,
          margin: 0,
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundImage: () => {
            if (isVisible && isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(2).gif?alt=media&token=2046189a-9f33-4d48-a0aa-9661606c54cd')";
            } else if (isVisible && !isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/ATLANTICS%20(4).gif?alt=media&token=10010d52-7dca-4ba9-94e0-a7e0afad346c')";
            } else if (!isVisible && isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/loading2.gif?alt=media&token=c84522a8-b815-44d8-83eb-e86c98b80868')";
            } else if (!isVisible && !isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/loading2.gif?alt=media&token=c84522a8-b815-44d8-83eb-e86c98b80868')";
            } else {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/download%20(1).gif?alt=media&token=8fc95601-a534-48c2-aeb0-549075c482eb')";
            }
          },
        }}
      >
        <div
          className="grupoCardsPadre"
          style={{ marginTop: isMobile ? "1000px" : "1500px" }}
        ></div>

        {isSmallDesktop ? <CardsEmpleadosMobile /> : <CardsEmpleados />}

        <div
          className="mambo22"
          style={{
            backgroundColor: "#101010 !important",
            marginBottom: "25rem",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "1.5rem",
              marginBottom: "20rem",
              padding: "0px",
              margin: "0px",
              height: "1500px",
            }}
          >
            <h2
              className="fontRubikMonoOne2"
              style={{
                marginTop: isMobile ? "40rem" : "32rem",
                fontSize: isMobile ? "150%" : "400%",
                marginBottom: "5rem",
              }}
            >
              TIENDA <span style={{ color: "#08FF08" }}>ON</span>LINE
              <br />
              <span style={{ color: "#00D1FF" }}>PROPIA</span>
              <br />
            </h2>
            <br />
            <h6>
              Potencia tu <strong>negocio digital</strong> sin intermediarios y
              sin comisiones
            </h6>

            {isMobile ? <MobileCards /> : <MyCarousel />}
          </div>
        </div>

        <FooterSeccion />

        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
