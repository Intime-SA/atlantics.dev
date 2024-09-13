import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import "./Navbar.css";

import Footer from "./footer/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useNavigate } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import FooterSeccion from "./footer/FooterSeccion";
import CardsEmpleados from "../../pages/cardsEmpleados/CardsEmpleados";
import CardsEmpleadosMobile from "../../pages/cardsEmpleados/CardsEmpleadosMobile";
import MobileCards from "./MobileCards";
import Aos from "aos";
import NewNavbar from "../Newnavbar";
import { FontStyles } from "../../styles/styles";

function DrawerAppBar(props) {
  const theme = useTheme();

  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.down("lg"));

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
    }, 2500); // Ajusta el tiempo de retraso

    return () => clearTimeout(timer);
  }, []);

  const words = "Your trusted partners in transformative times".split(" ");
  console.log(words);

  React.useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de la animación
      once: true, // Solo ejecuta la animación una vez
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "0vw",
        padding: "0px",
        margin: "0px",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      {isVisible && <NewNavbar />}

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
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/FLASH.gif?alt=media&token=b2baf5b9-6a61-445e-bc59-3f80a6fe2c26')";
            } else if (isVisible && !isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/ATLANTICS%20(4).gif?alt=media&token=10010d52-7dca-4ba9-94e0-a7e0afad346c')";
            } else if (!isVisible && isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Copy%20of%20Untitled%20Design.gif?alt=media&token=aacb23b2-16c8-4a1d-b598-2d21b457fa1a')";
            } else if (!isVisible && !isMobile) {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/download%20(6).gif?alt=media&token=f2132045-7e96-4146-9ef8-e52c0254d368')";
            } else {
              return "url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/download%20(6).gif?alt=media&token=f2132045-7e96-4146-9ef8-e52c0254d368')";
            }
          },
        }}
      >
        <div
          className="grupoCardsPadre"
          style={{ marginTop: isMobile ? "250px" : "1500px" }}
        >
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
        </div>
        {isMobile && (
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Cambia a columna si es mobile
              justifyContent: isMobile ? "center" : "space-between", // Ajusta el centrado en mobile
              alignItems: "center",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              padding: 0,
              margin: 0,
              minHeight: "100vh",
              minWidth: "100vw",
              backgroundImage: "linear-gradient(0deg, #010102 0%, #101010 55%)",
              width: "100%",
            }}
          >
            {/* Logo de la empresa y eslogan */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                width: isMobile ? "90%" : "45%", // Ajusta el ancho en mobile
                marginBottom: isMobile ? "20px" : 0, // Espacio entre logo y video en mobile
              }}
            >
              {/*               <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
                alt="Logo"
                style={{
                  width: "100%", // Ocupar todo el ancho disponible en ambos modos
                  maxWidth: isMobile ? "200px" : "400px", // Tamaño reducido en mobile
                  marginBottom: "20px",
                }}
              /> */}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300", // Peso de la fuente ligero para el eslogan
                  fontSize: isMobile ? "1.2em" : "1.5em", // Ajuste de tamaño de fuente en mobile
                }}
              >
                Aliados tecnologicos para potenciar tu negocio
              </Typography>
            </Box>

            {/* Video con sombra difuminada */}
            <Box
              sx={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Sombra difuminada
                borderRadius: isMobile ? "0px" : "10px", // Bordes sutilmente redondeados
                overflow: "hidden", // Para asegurar que el video respete el borde
                width: isMobile ? "100%" : "45%", // El video ocupa todo el ancho en mobile
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/AUTOMATIZA%20TUS%20PROCESOS%20(2).gif?alt=media&token=d03fa299-712a-448d-a053-0075dc54a32e"
                style={{
                  height: "auto",
                  width: "100%", // Ocupar el 100% del contenedor
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "200", // Peso de la fuente ligero para el eslogan
                fontSize: isMobile ? "1.0em" : "1.4em",
                marginTop: "2rem", // Ajuste de tamaño de fuente en mobile
              }}
            >
              Si te va mejor, nos va mejor
            </Typography>
          </Box>
        )}
        {isSmallDesktop ? <CardsEmpleadosMobile /> : <CardsEmpleados />}
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
            <h6
              style={{ ...FontStyles, textAlign: isMobile ? "center" : "left" }}
            >
              Potencia tu <strong>negocio digital</strong> sin intermediarios y
              sin comisiones
            </h6>

            {isMobile ? <MobileCards /> : <MyCarousel />}
          </div>
        </div>

        {!isMobile && (
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Cambia a columna si es mobile
              justifyContent: isMobile ? "center" : "space-between", // Ajusta el centrado en mobile
              alignItems: "center",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              padding: 0,
              margin: 0,
              minHeight: "100vh",
              minWidth: "100vw",
              backgroundImage: "linear-gradient(0deg, #010102 0%, #101010 55%)",
              width: "100%",
            }}
          >
            {/* Logo de la empresa y eslogan */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                width: isMobile ? "90%" : "45%", // Ajusta el ancho en mobile
                marginBottom: isMobile ? "20px" : 0, // Espacio entre logo y video en mobile
              }}
            >
              <div>
                <img
                  data-aos="fade-down"
                  src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
                  alt="Logo"
                  style={{
                    width: "80%", // Ocupar todo el ancho disponible en ambos modos
                    maxWidth: isMobile ? "200px" : "400px", // Tamaño reducido en mobile
                  }}
                />
              </div>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "300", // Peso de la fuente ligero para el eslogan
                  fontSize: isMobile ? "1.2em" : "1.2rem", // Ajuste de tamaño de fuente en mobile
                }}
              >
                Your trusted partner in transformative times...
              </Typography>
            </Box>

            {/* Video con sombra difuminada */}
            <Box
              sx={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Sombra difuminada
                borderRadius: isMobile ? "0px" : "10px", // Bordes sutilmente redondeados
                overflow: "hidden", // Para asegurar que el video respete el borde
                width: isMobile ? "100%" : "45%", // El video ocupa todo el ancho en mobile
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/AUTOMATIZA%20TUS%20PROCESOS%20(2).gif?alt=media&token=d03fa299-712a-448d-a053-0075dc54a32e"
                style={{
                  height: "auto",
                  width: "100%", // Ocupar el 100% del contenedor
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        )}

        {!isMobile && (
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
              backgroundImage: `
             linear-gradient(
               to bottom, 
               rgba(0, 0, 0, 0.7) 0%, 
               rgba(0, 0, 0, 0) 40%
             ),
             linear-gradient(
               to top, 
               rgba(0, 0, 0, 0.7) 0%, 
               rgba(0, 0, 0, 0) 40%
             ), 
             url('https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/NO%20POSTERGES.gif?alt=media&token=e3e5bf13-be64-4b9a-8c57-eeea4ca80c76')`,
            }}
          ></Box>
        )}

        {!isMobile && (
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row", // Cambia a columna si es mobile
              justifyContent: isMobile ? "center" : "space-between", // Ajusta el centrado en mobile
              alignItems: "center",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              padding: 0,
              margin: 0,
              minHeight: "100vh",
              minWidth: "100vw",
              backgroundColor: "#010101",
              backgroundImage:
                "linear-gradient(180deg, #010101 21%, #4c5559 54%, #171717 89%)",
              width: "100%",
            }}
          ></Box>
        )}

        <FooterSeccion />

        <Footer />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
