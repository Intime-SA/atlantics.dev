import React from "react";
import { Container, Typography } from "@mui/material";
import "./Home.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" className="home-container">
      {/* Sección izquierda */}
      <section
        className="hero-section"
        style={{
          color: "#ffffff",
          borderRadius: "50px",
          marginBottom: "5rem",
          marginTop: "1rem",
          height: "40%",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="typography-animation"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1976d2",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Agregar sombreado al texto
              marginTop: "5rem",
            }}
          >
            <h1 className="fontRubikMonoOne">Software Factory</h1>
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "'Jaro', sans-serif",
              fontSize: "120%",
              color: "#1976d2",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Agregar sombreado al texto
              marginTop: "1rem",
            }}
            gutterBottom
          >
            <h2 className="h2-animation">
              Desarrollamos soluciones personalizadas
            </h2>
          </Typography>
        </Container>
      </section>

      <section
        className="section-animation"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: isMobile ? "-100px" : "50vh",
        }}
      >
        <img
          src="../../../0000Chat bot-pana.svg"
          alt=""
          style={{ width: "45%", marginBottom: "10rem" }}
        />
      </section>
    </Container>
  );
};

export default Home;
