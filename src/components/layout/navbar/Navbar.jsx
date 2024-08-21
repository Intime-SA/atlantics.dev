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
import Footer from "./footer/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AnimatedDiv from "./AnimateDiv";
import { FontStyles } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Staff", url: "/staff" },
  { nombre: "Contacto", url: "/contacto" },
];

function DrawerAppBar(props) {
  const theme = useTheme();

  const navigate = useNavigate();

  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor según tu necesidad

    if (isMobile) {
      navigate("/staff");
    }
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15rem",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "space-around",
    padding: "2rem",
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    padding: "5rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: "1 1 45%",
    minWidth: "300px",
    maxWidth: "500px",
    height: "100%",
  };

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem",
  };

  const cardIconStyle = {
    fontSize: "4rem",
    color: "#a7ffff",
  };

  const cardTextStyle = {
    fontSize: "1.5rem",
    color: "white",
    textAlign: "left",
  };

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
          backgroundColor: "transparent",
          width: "40vw",
          borderRadius: "50px",
          marginTop: "3rem",
          position: "fixed", // Fija la toolbar en una posición
          top: "0%", // Centra verticalmente
          left: "30%", // Centra horizontalmente
          transform: "translate(-50%, -50%)", // Ajusta para que quede realmente centrada
        }}
      >
        <Toolbar
          style={{
            height: "10vh",
            width: "80vw",
            display: "flex",
            justifyContent: "center",
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
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
              alt="logo"
              srcset=""
              style={{
                width: "12rem",
                margin: "5px",
                padding: "0px",
              }}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {" "}
          </Typography>
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
              {isMobile && (
                <div>
                  <Button onClick={() => handleDrawerToggle()}>
                    <span class="material-symbols-outlined">menu</span>
                  </Button>
                </div>
              )}
              <div
                style={{
                  width: "1%",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></div>
              <Button>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview.png?alt=media&token=42352698-e9e7-4f9c-9f6f-fc268b44a25a"
                  alt=""
                  style={{
                    width: "50px",
                    borderRadius: "80%",
                  }}
                />
              </Button>
              <Button>
                <img
                  style={{
                    width: "50px",
                    borderRadius: "80%",
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo__1_-removebg-preview%20(2).png?alt=media&token=0c0069c6-87fa-45c6-8334-5991b5a577ff"
                  alt=""
                  srcset=""
                />
              </Button>{" "}
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
          backgroundImage: isVisible
            ? "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/ATLANTICS%20(4).gif?alt=media&token=10010d52-7dca-4ba9-94e0-a7e0afad346c')"
            : "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/loading2.gif?alt=media&token=c84522a8-b815-44d8-83eb-e86c98b80868')",
          backgroundSize: isMobile ? "cover" : "100%", // O "contain", dependiendo de cómo quieras que se ajuste la imagen
          backgroundRepeat: "no-repeat",
          padding: "0px",
          margin: "0px",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <div
          className="grupoCardsPadre"
          style={{ marginTop: isMobile ? "1000px" : "1500px" }}
        ></div>
        <div
          className="grupoCardsPadre"
          style={{
            marginTop: isMobile ? "1000px" : "0",
          }}
        >
          <div className="grupoCards">
            <div style={{ flexDirection: "column-reverse" }}>
              <h2
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "500%",
                }}
              >
                PROFESIONALES <br />
              </h2>
              <h1
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: "900",
                }}
              >
                ATLANTICS<span style={{ fontWeight: "300" }}>.dev</span>
              </h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="profile-card1" id="a1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/RodrigoSilva.jpeg?alt=media&token=005632f0-c198-4bae-98c9-e99a5d5a5393"
                  alt="Rodrigo Silva"
                />
                <h1 style={FontStyles}>Rodrigo Silva</h1>
                <h2 style={FontStyles}>CTO - Cofounder</h2>
                <h3 style={FontStyles}>Full-Stack Developer</h3>
                <p style={FontStyles}>
                  Lidera la interfaz WEB de nuestros desarrollos, asegurando la
                  innovación continua y las mejores practicas del diseño de
                  Aplicacion Interactivas con sistemas externos.
                </p>
                <a
                  href="https://au.linkedin.com/in/rodrigo-silva-58508a30b"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                    alt="pola"
                    style={{ width: "30px", height: "auto" }}
                  />
                  <p>silva.rodrigo@atlantics.dev</p>
                </a>
              </div>

              <div class="profile-card2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
                  alt="Ramiro Martin Arce"
                />
                <h1 style={FontStyles}>Ramiro Martin Arce</h1>
                <h2 style={FontStyles}>CEO - Cofounder</h2>
                <h3 style={FontStyles}>Business Analyst</h3>
                <p style={FontStyles}>
                  Dirige la visión estratégica de la empresa, define los
                  objetivos comerciales y lidera el crecimiento y la expansión
                  de la organizacion.
                </p>
                <a
                  href="https://www.linkedin.com/in/ramiro-martin-arce-3a7843ba/"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                    alt="pola"
                    style={{ width: "30px", height: "auto" }}
                  />
                  <p>arce.ramiro@atlantics.dev</p>
                </a>
              </div>

              <div class="profile-card1">
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQEYBMSyhgCIHQ/profile-displayphoto-shrink_800_800/0/1675287129289?e=1729123200&v=beta&t=8rdHfSBFx1BazjqjCmhnKo7Ejv10PbNxrgjATBD8HL4"
                  alt="Federico Larrea"
                />
                <h1 style={FontStyles}>Federico Larrea</h1>
                <h2 style={FontStyles}>COO - Consultant</h2>
                <h3 style={FontStyles}>Engineer Mercado Libre</h3>
                <p style={FontStyles}>
                  Supervisa las operaciones diarias, optimizando procesos y
                  asegurando la eficiencia en cada aspecto de la infraestructura
                  de nuestros servicios.
                </p>
                <a
                  href="https://www.linkedin.com/in/larreaf/?originalSubdomain=ar"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                    alt="pola"
                    style={{ width: "30px", height: "auto" }}
                  />
                  <p>larrea.federico@atlantics.dev</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pre-container">
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
            <h2 className="fontRubikMonoOne2">
              DESARROLLO
              <br />
              eCommerce
              <br />
              <span style={{ color: "#00D1FF" }}>PROPIO</span>
            </h2>
            <h3></h3>

            <div style={containerStyle}>
              <div style={cardsContainerStyle}>
                <div style={cardStyle}>
                  <div style={iconContainerStyle}>
                    <span
                      id="componentPeso"
                      className="material-symbols-outlined"
                      style={cardIconStyle}
                    >
                      attach_money
                    </span>
                  </div>
                  <div>
                    <h2 style={cardTextStyle}>
                      Integraciones con plataformas de Correo, Pagos y Gestion.
                    </h2>
                  </div>
                </div>

                <div style={cardStyle}>
                  <div style={iconContainerStyle}>
                    <span
                      id="componentPeso2"
                      className="material-symbols-outlined"
                      style={cardIconStyle}
                    >
                      cloud
                    </span>
                  </div>
                  <div>
                    <h2 style={cardTextStyle}>
                      Servicio disponible 24/7. ¡Sin comisiones % sobre Ventas!
                    </h2>
                  </div>
                </div>

                <div style={cardStyle}>
                  <div style={iconContainerStyle}>
                    {" "}
                    <span
                      id="componentPeso3"
                      className="material-symbols-outlined"
                      style={cardIconStyle}
                    >
                      monitoring
                    </span>
                  </div>
                  <div>
                    <h2 style={cardTextStyle}>
                      Reportes y funciones a pedido del cliente. 100%
                      Customizable
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
