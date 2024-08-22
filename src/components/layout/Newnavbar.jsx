import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NewNavbar = () => {
  const navItems = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Staff", url: "/staff" },
    { nombre: "Contacto", url: "/contacto" },
  ];

  const theme = useTheme();

  const [isScrolled, setIsScrolled] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  React.useEffect(() => {
    // Añadir un pequeño retraso para la animación
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Ajusta el tiempo de retraso

    return () => clearTimeout(timer);
  }, []);

  return (
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
          height: "8vh",
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
                <Link
                  to="/contacto"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button onClick={() => handleDrawerToggle()}>
                    <span
                      class="material-symbols-outlined"
                      style={{ color: "#63747b" }}
                    >
                      menu
                    </span>
                  </Button>
                </Link>
              </div>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NewNavbar;
