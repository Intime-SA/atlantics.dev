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
          textAlign: "CENTER",
          marginLeft: "0rem",
        }}
        data-aos="zoom-in-left" // Animación para esta sección
      >
        ¡<strong>BASTA</strong>
        <span style={{ fontWeight: "100" }}> DE </span> COMISIONES!
      </Box>
      <Box
        component="p"
        sx={{
          mb: 2,
          fontFamily: "'Open Sans', sans-serif",
          textAlign: "left",
          marginTop: "5rem",
        }}
        data-aos="zoom-in-left" // Animación para este texto
      >
        A diferencia de otras plataformas, donde se realiza un pago mensual +
        pago de comisiones (3% sobre todas las ventas), nuestro servicio se
        compone por la Inversion Inicial y se abona{" "}
        <strong>POR UNICA VEZ</strong>.
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
            Cotizacion a medida de las necesidades del negocio.
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
          textAlign: "right",
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
          textAlign: "right",
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
          textAlign: "left",
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
          textAlign: "left",
        }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        Nuestra solucion consiste en replicar las interfaces modernas del
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
          textAlign: "justify",
          marginTop: "15rem",
        }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        <p
          style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: "100" }}
        >
          A diferencia de otras plataformas en el mercado, nuestra solución no
          retiene comisiones sobre tus ventas, solamente se cobra el uso.
          <br />
          Si un mes no usas la plataforma, no genera gastos.
          <br />
          Cada venta que realices es 100% para tu negocio.-
          <br />
          <br />
          Ejemplo:
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Ventas Brutas :</span>
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
