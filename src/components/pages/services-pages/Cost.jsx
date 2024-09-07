import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../../layout/Newnavbar";
import { styled } from "@mui/system";
import "./costos.css";
import MainIdeas from "./MainIdeas";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageContent = styled("img")({
  width: "90%",
  maxWidth: "1000px",
  height: "auto",
});

const Cost = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza automáticamente a la parte superior de la página
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  const theme = useTheme();

  /*   React.useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor según tu necesidad

    if (isMobile) {
      navigate("/staff");
    }
  }, []); */

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="container-principal">
      <NewNavbar />

      <section className="cost-container">
        <div className="cost-main">
          {isMobile && (
            <h1 
              style={{
                fontSize: "200%",
                fontFamily: '"Montserrat", sans-serif',
                marginTop: "5rem",
              }}
            >
              <span
                style={{
                  fontWeight: "900",
                  color:'#EEF8FA',
                  fontSize: "180%",
                }}
              >
                DEJA
              </span>
              <br />
              DE
              <br />
              ALQUILAR PLATAFORMAS
              <br />
            </h1>
          )}
          <br />
          <br />
          {!isMobile && (
            <div>
              <h1 className="cost-title" data-aos="fade-down">
                DEJA DE ALQUILAR
                <br />
                PLATAFORMAS
              </h1>
              <h2
                className="cost-title"
                style={{ color: "#2E2E2E", fontWeight: "800" }}
              >
                INVIERTA EN SU NEGOCIO
              </h2>
            </div>
          )}
          <p
            className="cost-paragraph"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{
              textAlign: "center",
              fontWeight: "450",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            En{" "}
            <strong>
              ATLANTICS
            </strong>
            .dev, desarrollamos una{" "}
            <span
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              SOLUCION
            </span>{" "}
            diseñada para optimizar tu negocio en el área del comercio
            electrónico.
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                marginTop: "2rem",
                color: "white",
                fontWeight:'300',
              }}
            >
              Una alternativa
              <span style={{ fontWeight: "700" }}> SUPERADORA</span> en el
              mercado
            </h2>
          </p>
        </div>

        <ImageContent
          src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Sales%20and%20Marketing%20Report.png?alt=media&token=198a1f72-99aa-4123-95af-8969d3b53e61  "
          alt="Grafico de ingresos"
        />

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MainIdeas />
        </div>
        <button
          className="contact-button"
          onClick={() => handleNavigation("/contacto")}
          style={{
            margin: "2rem",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h6>Contáctanos</h6>
          <span
            style={{ margin: "0.5rem", color: "white" }}
            class="material-symbols-outlined"
          >
            web_traffic
          </span>
        </button>
      </section>
    </div>
  );
};

export default Cost;
