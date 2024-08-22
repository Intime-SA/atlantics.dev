import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CardsEmpleadosMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const FontStyles = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "400",
    fontSize: "60%",
    width: "200px",
    textAlign: "center",
  };
  const FontStyles1 = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "bold",
    fontSize: "100%",
    width: "200px",
    textAlign: "center",
  };

  const FontStyles2 = {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "80%",
    width: "200px",
    textAlign: "center",
  };

  const FontStyles3 = {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "40%",
    width: "200px",
    textAlign: "center",
  };

  return (
    <div
      className="grupoCardsPadre"
      style={{
        marginTop: isMobile ? "50px" : "0",
        width: "50%",
        display: "flex",
        flexDirection: "column", // Coloca las tarjetas en columna
        alignItems: "center",
      }}
    >
      <div className="grupoCardsMobile">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "100%",
            }}
          >
            PROFESIONALES <br />
          </h2>
          <h1
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: "900",
              fontSize: "200%",
            }}
          >
            ATLANTICS<span style={{ fontWeight: "50" }}>.dev</span>
          </h1>
        </div>
        {/* Cada tarjeta se muestra una debajo de la otra */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            maxWidth: "350px",
          }}
        >
          {/* Tarjeta de Rodrigo Silva */}
          <div
            className="profile-card1mobile"
            id="a1"
            style={{
              marginBottom: "20px",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/RodrigoSilva.jpeg?alt=media&token=005632f0-c198-4bae-98c9-e99a5d5a5393"
              alt="Rodrigo Silva"
              style={{ width: "50%", height: "auto" }}
            />
            <h1 style={FontStyles}>Rodrigo Silva</h1>
            <h2 style={FontStyles}>CTO - Cofounder</h2>
            <h3 style={FontStyles}>Full-Stack Developer</h3>
            <p style={FontStyles}>
              Lidera la interfaz WEB de nuestros desarrollos, asegurando la
              innovación continua y las mejores prácticas del diseño de
              aplicaciones interactivas.
            </p>
            <a
              href="https://au.linkedin.com/in/rodrigo-silva-58508a30b"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
                margin: "0 auto",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="LinkedIn"
                style={{ width: "30px", height: "auto", marginRight: "10px" }}
              />

              <p>silva.rodrigo@atlantics.dev</p>
            </a>
          </div>

          {/* Tarjeta de Ramiro Martin Arce */}
          <div className="profile-card1mobile" style={{ marginBottom: "20px" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
              alt="Ramiro Martin Arce"
              style={{ width: "50%", height: "auto" }}
            />
            <h1 style={FontStyles1}>Ramiro Martin Arce</h1>
            <h2 style={FontStyles2}>CEO - Cofounder</h2>
            <h3 style={FontStyles3}>Business Analyst</h3>
            <p style={FontStyles}>
              Dirige la visión estratégica de la empresa, define los objetivos
              comerciales y lidera el crecimiento de la organización.
            </p>
            <a
              href="https://www.linkedin.com/in/ramiro-martin-arce-3a7843ba/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="LinkedIn"
                style={{ width: "30px", height: "auto", marginRight: "10px" }}
              />
              <p>arce.ramiro@atlantics.dev</p>
            </a>
          </div>

          {/* Tarjeta de Federico Larrea */}
          <div className="profile-card1mobile">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEYBMSyhgCIHQ/profile-displayphoto-shrink_800_800/0/1675287129289?e=1729123200&v=beta&t=8rdHfSBFx1BazjqjCmhnKo7Ejv10PbNxrgjATBD8HL4"
              alt="Federico Larrea"
              style={{ width: "50%", height: "auto" }}
            />
            <h1 style={FontStyles}>Federico Larrea</h1>
            <h2 style={FontStyles}>COO - Consultant</h2>
            <h3 style={FontStyles}>Engineer Mercado Libre</h3>
            <p style={FontStyles}>
              Supervisa las operaciones diarias, optimizando procesos y
              asegurando la eficiencia en cada aspecto de la infraestructura.
            </p>
            <a
              href="https://www.linkedin.com/in/larreaf/?originalSubdomain=ar"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
              }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/linkedin-01-01-512.webp?alt=media&token=a6e33e97-1292-4138-902d-a1f1ecf92c80"
                alt="LinkedIn"
                style={{ width: "30px", height: "auto", marginRight: "10px" }}
              />
              <p>larrea.federico@atlantics.dev</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEmpleadosMobile;
