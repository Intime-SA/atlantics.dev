import React, { useEffect } from "react";
import { Divider, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./costos.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const MainIdeas = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Configura la duración global de las animaciones
      easing: "ease-out-cubic", // Configura el easing global de las animaciones
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza automáticamente a la parte superior de la página
  }, []);

  const theme = useTheme();

  const navigate = useNavigate();

  /*   React.useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor según tu necesidad

    if (isMobile) {
      navigate("/staff");
    }
  }, []); */

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Sección 1 */}
      <Box
        component="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
          fontFamily: "'Raleway', sans-serif",
          fontSize: "1.3rem",
          margin: "1rem",
          marginLeft: "0rem",
          textAlign: isMobile ? "left" : "center",
        }}
        data-aos="zoom-in-left" // Animación para esta sección
      >
        <span style={{ fontWeight: "100" }}>Transacciones</span>{" "}
        <strong>LIMPIAS</strong>, <span style={{ fontWeight: "100" }}>sin</span>{" "}
        <strong>COMISIONES</strong>
      </Box>
      <Box
        component="p"
        sx={{
          mb: 2,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: isMobile ? "left" : "justify",
          marginTop: "5rem",
        }}
        data-aos="zoom-in-left" // Animación para este texto
      >
        A diferencia de otras plataformas, donde se realiza un pago mensual +
        pago de comisiones (3% sobre todas las ventas), nuestro servicio se
        compone de una inversión inicial que se abona{" "}
        <strong>POR ÚNICA VEZ</strong>.
        <br />
        <strong style={{ color: "#00D1FF" }}>TUS GANANCIAS NO SE TOCAN</strong>
        <br />
        <div style={{ marginTop: "2.5rem" }}>
          <span
            style={{
              marginTop: "5rem",
              fontWeight: "100",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Cotización a medida de las necesidades del negocio.
          </span>
        </div>
      </Box>

      <Divider
        sx={{
          marginY: 2,
          borderColor: "#65BDD2",
          borderBottomWidth: 2,
          marginTop: "5rem",
          marginBottom: "5rem",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      />

      {/* Sección 3 */}
      <Box
        component="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
          fontFamily: "'Raleway', sans-serif",
          fontSize: "1.3rem",
          margin: "1rem",
          marginRight: "0rem",
          textAlign: isMobile ? "right" : "center",
        }}
        data-aos="zoom-in-left" // Animación para esta sección
      >
        Mantenimiento
      </Box>
      <Box
        component="p"
        sx={{
          mb: 2,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: isMobile ? "right" : "justify",
        }}
        data-aos="zoom-in-left" // Animación para este texto
      >
        Para mantener tu sistema en óptimas condiciones y garantizar la
        disponibilidad, lideres de la industria como AWS y Google Cloud brindan
        el soporte asegurando una plataforma siempre funcional y actualizada.
        <br />
        <strong style={{ color: "#00D1FF" }}>NO COBRAMOS COMISIONES</strong>
        <br />
        <div style={{ marginTop: "2.5rem" }}>
          <span
            style={{
              marginTop: "5rem",
              fontWeight: "100",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Costo Mensual: Se abona <strong>UNICAMENTE</strong> el gasto del
            servidor.
          </span>
        </div>
      </Box>
      <Divider
        sx={{
          marginY: 2,
          borderColor: "#65BDD2",
          borderBottomWidth: 2,
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      />

      {/* Sección 4 */}
      <Box
        component="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
          fontFamily: "'Raleway', sans-serif",
          fontSize: "1.3rem",
          margin: "1rem",
          marginLeft: "0",
          textAlign: isMobile ? "left" : "center",
        }}
        data-aos="zoom-in-right" // Animación para esta sección
      >
        Competitividad
      </Box>
      <Box
        component="p"
        sx={{
          mb: 2,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: isMobile ? "left" : "justify",
        }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        Nuestra solución consiste en replicar las interfaces modernas del
        mercado y aplicarlas en un <strong>DESARROLLO PROPIO</strong> generando
        un ahorro exponencial en los gastos y comisiones de su tienda online.
        <br />
        <strong style={{ color: "#00D1FF" }}>
          SIN COSTOS FIJOS POR VENTAS
        </strong>
        <br />
        <div style={{ marginTop: "2.5rem" }}>
          <span
            style={{
              marginTop: "5rem",
              fontWeight: "100",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Generamos <strong>CONVENIOS DIRECTOS</strong> con proveedores para
            bajar los costos operativos.
          </span>
        </div>
      </Box>

      <Box
        component="p"
        sx={{
          mb: 2,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: "left",
          marginTop: "15rem",
        }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        <p
          style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: "100" }}
        >
          A diferencia de otras plataformas en el mercado, nuestra solución no
          retiene comisiones sobre tus ventas, solo se cobra por el uso.
          <br />
          Si un mes no utilizas la plataforma, no genera gastos.
          <br />
          Cada venta que realices es 100% para tu negocio.
          <br />
          <br />
          Ejemplo:
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Ventas brutas:</span>
            <span>$100.000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              Ahorro con <strong>ATLANTICS</strong>.dev
            </span>
            <span>
              <strong>$3.000</strong>
            </span>
          </div>
        </p>
      </Box>
    </Box>
  );
};

export default MainIdeas;
