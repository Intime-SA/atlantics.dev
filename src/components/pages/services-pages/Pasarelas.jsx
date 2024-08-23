import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../../layout/Newnavbar";
import { styled } from "@mui/system";
import "./costos.css";
import MainIdeas from "./MainIdeas";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PaymentShippingLogos from "./PaymentShippingLogos";

const ImageContent = styled("img")({
  width: "90%",
  maxWidth: "1000px",
  height: "auto",
});

const Pasarelas = () => {
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
                  color: "#63747B",
                  fontSize: "100%",
                }}
              >
                INTEGRAMOS
              </span>
              <br />
              TODOS LOS <br />
              MEDIOS DE PAGO
              <br />
            </h1>
          )}
          <br />
          <br />
          {!isMobile && (
            <h1 className="cost-title" data-aos="fade-down">
              <span
                style={{
                  fontWeight: "900",
                  color: "#2E2E2E",
                  fontSize: "100%",
                }}
              >
                INTEGRACION
              </span>{" "}
              <br />
              CON TODOS LOS MEDIOS DE PAGO
            </h1>
          )}
          <p
            className="cost-paragraph"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{
              textAlign: "center",
              fontWeight: "300",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            En{" "}
            <strong style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ATLANTICS
            </strong>
            .dev , llevamos a cabo todas las{" "}
            <span
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif",
                color: "#2E2E2E",
              }}
            >
              INTEGRACIONES
            </span>{" "}
            necesarias para ofrecer todos los medios de Pago electronicos.
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              Una forma
              <span style={{ fontWeight: "900" }}> NUEVA</span> de vender
              online.
            </h2>
          </p>
        </div>

        <ImageContent src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Customer%20Acquisition%20Cost%20Report.png?alt=media&token=e7859a41-11f5-4f16-82a3-605d239db80d" />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaymentShippingLogos />
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

export default Pasarelas;
