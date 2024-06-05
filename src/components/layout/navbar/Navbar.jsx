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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;
const navItems = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Staff", url: "/staff" },
  { nombre: "Contacto", url: "/contacto" },
];

function DrawerAppBar(props) {
  const theme = useTheme();

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
          <Link to="/">
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
          </Link>
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
              width: isMobile ? "100%" : "40%",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.nombre}
                sx={{
                  fontSize: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Link to={item.url} id="asd123" class="typography-animation">
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
          </Box>
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
          background: "rgb(2,0,36)",
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,29,73,1) 35%, rgba(0,212,255,1) 100%)",

          /* backgroundImage: `url('../../../../fondo-section2.jpg')` */ // Reemplaza con la URL de tu imagen
          padding: "0px",
          margin: "0px",
          minHeight: "100vh",
          minWidth: "100vw", // Ajusta la altura según sea necesario
        }}
      >
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
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/pepo.png?alt=media&token=927b2dd1-e3dc-4a5e-a894-a145db7ee772"
                alt="Rodrigo Silva"
              />
              <h1>Rodrigo Silva</h1>
              <h2>CTO - Cofounder</h2>
              <h3>Full-Stack Developer</h3>
            </div>
            <div class="profile-card2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
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
          <div style={{ marginBottom: isMobile ? "20rem" : "0rem" }}>
            <h3 className="titulosTrabajos">
              SISTEMA DE ADMINISTRACION DE VENTAS / STOCK + E-COMMERCE
            </h3>
            <Link to="https://www.mayoristakaurymdp.com">
              <h4 id="asd1232" class="typography-animation">
                www.mayoristakaurymdp.com
              </h4>
            </Link>
          </div>

          <div class="cards-container">
            <div class="cardJobs2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/kaury123.png?alt=media&token=b6370eae-f1db-407e-8f9d-407d2060f614"
                alt="Project 1"
                width="600px"
                style={{ padding: 0, margin: 0 }}
              />
            </div>
            <div class="cardJobs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd1232mobile.png?alt=media&token=2c97c53a-8c9a-416d-bf9d-30779cf25f94"
                alt="Project 1"
                width="300px"
                style={{ padding: 0, margin: 0, objectFit: "contain" }}
                sizes="contain"
              />
            </div>
          </div>
        </div>
        <div class="pre-container4">
          <h3
            className="titulosTrabajos"
            style={{
              marginTop: "25rem",
              fontSize: "2rem",
            }}
          >
            SISTEMA DE COBRANZAS BANCARIAS
          </h3>
          <Link to="https://www.invertimeonline.com">
            <h4
              id="asd1232"
              class="typography-animation"
              style={{ textAlign: "right" }}
            >
              www.invertimeonline.com
            </h4>
          </Link>
          {isMobile && (
            <div class="checklist">
              <h4 class="checklist2">Automatización de cobranzas</h4>

              <ul>
                <li>Integración con servicios web de bancos</li>
                <li>Generación automática de solicitudes de cobro</li>
                <li>Seguimiento de pagos y conciliación bancaria</li>
              </ul>
              <br />
              <h4 class="checklist2">Gestión de facturas electrónicas</h4>
              <ul>
                <li>Emisión de facturas electrónicas</li>
                <li>Envío automático de facturas a clientes</li>
                <li>Validación de facturas según normativa vigente</li>
              </ul>
              <h4 class="checklist2">Reportes y análisis</h4>
              <ul>
                <li>Generación de reportes de cobranza</li>
                <li>Análisis de datos de pago y rendimiento</li>
                <li>
                  Exportación de datos a formatos compatibles (Excel, PDF)
                </li>
              </ul>
            </div>
          )}

          <div class="icon2" id="webservice">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/png-transparent-amazon-logo-cloud-computing-amazon-web-services-web-hosting-service-computer-servers-internet-hosting-service-computer-hardware-information-technology-removebg-preview.png?alt=media&token=c56ce276-6446-4167-a453-9eeade9278fd"
              alt="Icono grande"
            />
          </div>

          <div class="icon" id="lineasIcon">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo__2_-removebg-preview.png?alt=media&token=f0059d3c-c996-4d45-b6b2-59a2a9f3e1ad"
              alt="Icono grande"
            />
          </div>

          <div class="cards-container" style={{}}>
            <div class="cardJobs2" id="center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/cobranzaINT.png?alt=media&token=0432bad0-f742-4d3e-9704-09323466237e"
                alt="Project 1"
                width="600px"
                style={{ padding: 0, margin: 0 }}
              />
            </div>
            <div class="cardJobs" id="center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/cobranzasv2.png?alt=media&token=c67c7fb7-5171-476f-bb65-5b5e8b6066fd"
                alt="Project 1"
                width="250px"
                style={{ padding: 0, margin: 0 }}
                sizes="contain"
              />
            </div>
            <div>
              {!isMobile && (
                <div class="checklist">
                  <h4 class="checklist2">Automatización de cobranzas</h4>

                  <ul>
                    <li>Integración con servicios web de bancos</li>
                    <li>Generación automática de solicitudes de cobro</li>
                    <li>Seguimiento de pagos y conciliación bancaria</li>
                  </ul>
                  <br />
                  <h4 class="checklist2">Gestión de facturas electrónicas</h4>
                  <ul>
                    <li>Emisión de facturas electrónicas</li>
                    <li>Envío automático de facturas a clientes</li>
                    <li>Validación de facturas según normativa vigente</li>
                  </ul>
                  <h4 class="checklist2">Reportes y análisis</h4>
                  <ul>
                    <li>Generación de reportes de cobranza</li>
                    <li>Análisis de datos de pago y rendimiento</li>
                    <li>
                      Exportación de datos a formatos compatibles (Excel, PDF)
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div class="pre-container5">
          <div style={{ marginRight: "20px", gap: "50px" }}>
            <h3 className="titulosTrabajos">
              SISTEMA DE PEDIDOS / VENDEDORES - DISTRIBUIDORA
            </h3>
            <Link
              style={{ textAlign: "right", margin: "1rem" }}
              to="https://www.instagram.com/alimentosnaturalesmdq/"
            >
              <h4 id="asd1232">@alimentosnaturalesmdp</h4>
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Arturo+Alio+3198,+Mar+del+Plata,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                {" "}
                <span
                  style={{ margin: "1rem" }}
                  class="material-symbols-outlined"
                >
                  pin_drop
                </span>
                Arturo Alio 3198, Mar del Plata, Argentina
              </h4>
            </a>
            <a href="tel:+542234543960">
              <h4>
                <span
                  style={{ margin: "1rem" }}
                  class="material-symbols-outlined"
                >
                  call
                </span>
                0223 454-3960
              </h4>
            </a>
          </div>
          <div class="cards-container">
            <div class="cardJobs2" id="center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales2desktop.png?alt=media&token=0b3cdb21-cf43-4e4b-91c0-c0288b7361d6"
                alt="Project 1"
                width="600px"
                style={{ padding: 0, margin: 0 }}
              />
            </div>

            <div class="cardJobs" id="center">
              <img
                src={
                  isMobile
                    ? "https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales.png?alt=media&token=621f3624-4377-4440-9331-9bf7dbe976a3"
                    : "https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales2.png?alt=media&token=28eaee81-c3f6-4326-9d90-e4faa1d76c60https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales.png?alt=media&token=621f3624-4377-4440-9331-9bf7dbe976a3"
                }
                np
                alt="Project 1"
                width="200px"
                style={{ padding: 0, margin: 0 }}
                sizes="contain"
              />
            </div>
          </div>
        </div>
        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
