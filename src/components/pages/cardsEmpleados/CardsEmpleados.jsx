import React from "react";
import { FontStyles } from "../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CardsEmpleados = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor según tu necesidad

    if (isMobile) {
      navigate("/staff");
    }
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="grupoCardsPadre"
      style={{
        marginTop: isMobile ? "1000px" : "0",
        width: "100%",
      }}
    >
      <div className="grupoCards">
        <div style={{ flexDirection: "column-reverse" }}>
          <h2
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "500%",
            }}
          >
            PROFESIONALES <br />
          </h2>
          <h1
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: "900",
            }}
          >
            ATLANTICS<span style={{ fontWeight: "300" }}>.dev</span>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="profile-card1" id="a1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/RodrigoSilva.jpeg?alt=media&token=005632f0-c198-4bae-98c9-e99a5d5a5393"
              alt="Rodrigo Silva"
            />
            <h1 style={FontStyles}>Rodrigo Silva</h1>
            <h2 style={FontStyles}>CTO - Cofounder</h2>
            <h3 style={FontStyles}>Full-Stack Developer</h3>
            <p style={FontStyles}>
              Lidera la interfaz WEB de nuestros desarrollos , asegurando la
              innovación continua y las mejores practicas del diseño de
              Aplicacion Interactivas con sistemas externos.
            </p>
            <a
              href="https://au.linkedin.com/in/rodrigo-silva-58508a30b"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="pola"
                style={{ width: "30px", height: "auto" }}
              />
              <p>silva.rodrigo@atlantics.dev</p>
            </a>
          </div>

          <div class="profile-card2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
              alt="Ramiro Martin Arce"
            />
            <h1 style={FontStyles}>Ramiro Martin Arce</h1>
            <h2 style={FontStyles}>CEO - Cofounder</h2>
            <h3 style={FontStyles}>Business Analyst</h3>
            <p style={FontStyles}>
              Dirige la visión estratégica de la empresa, define los objetivos
              comerciales y lidera el crecimiento y la expansión de la
              organizacion.
            </p>
            <a
              href="https://www.linkedin.com/in/ramiro-martin-arce-3a7843ba/"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="pola"
                style={{ width: "30px", height: "auto" }}
              />
              <p>arce.ramiro@atlantics.dev</p>
            </a>
          </div>

          <div class="profile-card1">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEYBMSyhgCIHQ/profile-displayphoto-shrink_800_800/0/1675287129289?e=1729123200&v=beta&t=8rdHfSBFx1BazjqjCmhnKo7Ejv10PbNxrgjATBD8HL4"
              alt="Federico Larrea"
            />
            <h1 style={FontStyles}>Federico Larrea</h1>
            <h2 style={FontStyles}>COO - Consultant</h2>
            <h3 style={FontStyles}>Engineer Mercado Libre</h3>
            <p style={FontStyles}>
              Supervisa las operaciones diarias, optimizando procesos y
              asegurando la eficiencia en cada aspecto de la infraestructura de
              nuestros servicios.
            </p>
            <a
              href="https://www.linkedin.com/in/larreaf/?originalSubdomain=ar"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="pola"
                style={{ width: "30px", height: "auto" }}
              />
              <p>larrea.federico@atlantics.dev</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEmpleados;