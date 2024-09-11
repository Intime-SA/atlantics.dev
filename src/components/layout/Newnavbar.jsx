import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NewNavbar = () => {
  // Captura la URL de donde viene el usuario// Ejecuta solo una vez al montar

  const navItems = [
    { nombre: "Inicio", url: "https://landing.atlantics.dev" },
    { nombre: "Staff", url: "https://staff.atlantics.dev" },
    { nombre: "Contacto", url: "/contacto" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Contenido del Drawer para Mobile
  const drawerContent = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#2E2E2E",
        height: "100%",
        padding: "1rem",
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.nombre} disablePadding>
            <ListItemText
              primary={
                <Link
                  to={item.url}
                  style={{
                    textDecoration: "none",
                    color: "#d9e2ec",
                    fontSize: "1.2rem",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: "400",
                    marginBottom: "1rem",
                  }}
                >
                  {item.nombre}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#2E2E2E",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
          zIndex: 10,
        }}
      >
        <Toolbar
          style={{
            height: "12vh",
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#2E2E2E",
            padding: "0px",
            margin: "0px",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ marginLeft: "1rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
              alt="logo"
              style={{
                width: "9rem",
                height: "9rem",
                margin: "0",
                transition: "transform 0.3s ease",
              }}
              className="logo-img"
            />
          </Link>

          {/* Links para Desktop */}
          {!isMobile && isVisible && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                width: "100%",
                gap: "5rem",
                backgroundColor: "#2E2E2E",
                padding: "0",
                marginRight: "5rem",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.nombre}
                  sx={{
                    fontSize: "1rem",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: "300",
                    transition:
                      "opacity 2s ease-in-out, transform 2s ease-in-out",
                    transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  <Link
                    to={item.url}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                  >
                    <h2
                      className="link-newNavbar"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: "1.3rem",
                        fontWeight: "400",
                        color: "#d9e2ec",
                      }}
                    >
                      {item.nombre}
                    </h2>
                  </Link>
                </Typography>
              ))}
            </Box>
          )}

          {/* Menú desplegable para Mobile */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ marginRight: "1rem" }}
            >
              <MenuIcon sx={{ fontSize: "2rem", color: "#d9e2ec" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer para Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en mobile
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#2E2E2E",
            color: "#d9e2ec",
            width: 240,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Estilos CSS para el hover interactivo */}
      <style jsx="true">
        {`
          a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #63747b;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
          }
          a:hover:before {
            visibility: visible;
            transform: scaleX(1);
          }
          img.logo-img:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default NewNavbar;
