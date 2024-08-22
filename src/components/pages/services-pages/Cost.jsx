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
  maxWidth: "500px",
  height: "auto",
});

const Cost = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

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
                  color: "#63747B",
                  fontSize: "220%",
                }}
              >
                BASTA
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
            <h1 className="cost-title" data-aos="fade-down">
              DEJA DE ALQUILAR PLATAFORMAS
            </h1>
          )}
          <p
            className="cost-paragraph"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{
              textAlign: "center",
              fontWeight: "100",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            En{" "}
            <strong style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Atlantics.dev
            </strong>
            , desarrollamos una{" "}
            <span
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif",
                color: "#63747B ",
              }}
            >
              SOLUCION
            </span>{" "}
            diseñada para optimizar tu negocio en el area del Comercio
            Electronico.
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                marginTop: "2rem",
              }}
            >
              Una alternativa
              <span style={{ fontWeight: "900" }}> SUPERADORA</span> en el
              mercado
            </h2>
          </p>
        </div>

        <ImageContent
          src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Grafico-ingresos.png?alt=media&token=cfb685a2-83e1-4560-b8a0-6fe76d6c6743"
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
          style={{ margin: "2rem" }}
        >
          Contáctanos
        </button>
      </section>
    </div>
  );
};

export default Cost;
