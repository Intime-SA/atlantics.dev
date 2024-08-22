import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../../layout/Newnavbar";
import { styled } from "@mui/system";
import "./costos.css";
import MainIdeas from "./MainIdeas";

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
  return (
    <div className="container-principal">
      <NewNavbar />

      <section className="cost-container">
        <div className="cost-main">
          <h1 className="cost-title" data-aos="fade-down">
            Costos y Servicios
          </h1>
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
            , desarrollamos software pensado para optimizar tu negocio de
            eCommerce. Nuestras soluciones te permiten avanzar sin
            interrupciones ni costos inesperados, manteniéndote enfocado en el
            crecimiento.
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
        >
          Contáctanos para más detalles
        </button>
      </section>
    </div>
  );
};

export default Cost;
