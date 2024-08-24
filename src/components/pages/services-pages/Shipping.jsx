import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../../layout/Newnavbar";
import { styled } from "@mui/system";
import "./costos.css";
import MainIdeas from "./MainIdeas";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PaymentShippingLogos from "./PaymentShippingLogos";
import PaymentShipping from "./PaymentShipping";

const ImageContent = styled("img")({
  width: "90%",
  maxWidth: "1000px",
  height: "auto",
});

const Shipping = () => {
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
                  fontSize: "140%",
                }}
              >
                MEJORAMOS
              </span>
              <br />
              TUS <br />
              CONVENIOS
              <br />
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
                MEJORAMOS
              </span>{" "}
              <br />
              TODOS TUS CONVENIOS
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
            .dev, gestionamos la apertura directa con{" "}
            <span
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontFamily: "'Montserrat', sans-serif",
                color: "#2E2E2E",
              }}
            >
              EMPRESAS DE CORREO
            </span>{" "}
            para gestionar envíos desde la tienda.
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                marginTop: "4rem",
                marginBottom: "3rem",
              }}
            >
              BAJA LOS
              <span style={{ fontWeight: "900" }}> COSTOS DE ENVIO</span> y
              vende <span style={{ fontWeight: "900" }}> MAS</span>
            </h2>
          </p>
        </div>
        <div data-aos="fade-down">
          <ImageContent src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Customer%20Acquisition%20Cost%20Report%20(2).png?alt=media&token=b0a1e353-8ff2-4184-a15c-b615b35bad36" />
        </div>

        <div
          data-aos="fade-down"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaymentShipping />
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

export default Shipping;
