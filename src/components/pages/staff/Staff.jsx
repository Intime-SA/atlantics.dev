import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import "./Staff.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import NewNavbar from "../../layout/Newnavbar";
import { FontStyles, FontStyles4 } from "../../styles/styles";


const Staff = () => {
  const theme = useTheme();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


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
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Añadir un pequeño retraso para la animación
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Ajusta el tiempo de retraso

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg" className="home-container">
      <Box 
        sx={{
          display: "flex",
          width: "0vw",
          padding: "0px",
          margin: "0px",
          justifyContent: "center",
          width: "100vw",
        }}>

        <NewNavbar/>
      </Box>
          {isVisible && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: isMobile ? "100%" : "40%",
              }}
            >

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

      <section
        className="hero-section"
        style={{
          color: "#ffffff",
          borderRadius: "50px",
          marginBottom: "5rem",
          marginTop: "1rem",
          height: "30%",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
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
            <h1 style={{...FontStyles, marginTop:'6rem'}}>Staff</h1>
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "'Jaro', sans-serif",
              fontSize: "120%",
              color: "#1976d2",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Agregar sombreado al texto
              marginTop: "1rem",
              width: "100%",
            }}
            gutterBottom
          >
            <h2 style={{
              ...FontStyles4, 
              width: "100%", fontSize: isMobile ? '1.5rem' : '2rem', 
              padding: '1rem',
              }}>
              "A motivated team, united by a common purpose, is the most
              powerful creative force..."
            </h2>
          </Typography>
        </Container>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: isMobile ? "25rem" : "1rem",
          }}
        >
          <span
            style={{
              fontSize: "600%",
              color: "white",
              animation: "float 2s ease-in-out infinite",
            }}
            className="material-symbols-outlined"
          >
            keyboard_double_arrow_down
          </span>
        </div>
        <style>
        {`
          @keyframes float {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
        </style>
      </section>
      <div className="equipo">
        <div className="integrante"
        style={{ padding: isMobile ? '2.5rem' : '5rem' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
            alt="logoRama"
            className="fotoTeam"
            style={{ 
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '100%' : '10%'
             }} 
          />
          <h1>Ramiro Martin Arce</h1>
          <h2>CEO & Cofundador @atlantics.dev | DevOps Specialist</h2>
          {!isMobile && (
            <h3 style={{textAlign: 'justify'}}>
              Ramiro cuenta con más de 7 años de experiencia en gestión de proyectos y
              DevOps. Su enfoque está en la planificación estratégica y la implementación de
              soluciones en la nube, liderando equipos en entornos ágiles.
            </h3>
          )}
        </div>

        <div className="integrante"
        style={{ padding: isMobile ? '2.5rem' : '5rem' }}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEYBMSyhgCIHQ/profile-displayphoto-shrink_800_800/0/1675287129289?e=1729123200&v=beta&t=8rdHfSBFx1BazjqjCmhnKo7Ejv10PbNxrgjATBD8HL4"
            alt="Federico Larrea"
            className="fotoTeam"
            style={{ 
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '100%' : '10%'
             }} 
          />
          <h1>Federico Larrea</h1>
          <h2>Software Engineer @atlantics.dev</h2>
          {!isMobile && (
            <h3 style={{textAlign: 'justify'}}>
              Federico es un ingeniero de software con experiencia en desarrollo de
              infraestructura y automatización de procesos. Actualmente, trabaja en la
              optimización de sistemas y plataformas en entornos de alto rendimiento.
            </h3>
          )}
        </div>

        <div className="integrante"
        style={{ padding: isMobile ? '2.5rem' : '5rem' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/RodrigoSilva.jpeg?alt=media&token=005632f0-c198-4bae-98c9-e99a5d5a5393"
            alt="Rodrigo Silva"
            className="fotoTeam"
            style={{ 
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '100%' : '10%'
             }} 
          />
          <h1>Rodrigo Silva</h1>
          <h2>Front-End Developer @atlantics.dev</h2>
          {!isMobile && (
            <h3 style={{textAlign: 'justify'}}>
              Rodrigo se especializa en desarrollo Front-End, con experiencia en React,
              JavaScript y CSS. Su enfoque está en crear interfaces de usuario eficientes y optimizadas, aplicando metodologías ágiles en sus proyectos.
            </h3>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Staff;