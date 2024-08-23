import React from "react";
import {
  Button,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FooterSeccion = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleContactClick = () => {
    navigate("/contacto");
  };

  const handleStaffClick = () => {
    navigate("/staff");
  };

  const handleWorkWithUsClick = () => {
    navigate("/trabaja-con-nosotros");
  };

  return (
    <div
      style={{
        backgroundColor: "#171717",
        color: "white",
        height: "500px", // Ajuste para que el contenedor se adapte al contenido
        width: "100%",
        padding: isMobile ? "1rem" : "2rem", // Ajuste de padding según el tamaño de pantalla
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10rem",
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold", // Fuente en negrita
          marginBottom: isMobile ? "1rem" : "2rem", // Ajuste del margen según el tamaño de pantalla
          textAlign: "center",
          fontSize: isMobile ? "1.5rem" : "2.5rem", // Tamaño de fuente ajustable
        }}
      >
        ¿Queres saber mas?
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleContactClick}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold", // Fuente en negrita
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem", // Ajuste de padding en botones
          }}
        >
          Solicitar INFO
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStaffClick}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
          }}
        >
          Ver Nuestro Staff
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleWorkWithUsClick}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
          }}
        >
          Trabaja con Nosotros
        </Button>
      </Stack>
    </div>
  );
};

export default FooterSeccion;
