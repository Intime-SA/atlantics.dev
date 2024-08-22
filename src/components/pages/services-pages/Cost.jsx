import React from "react";
import NewNavbar from "../../layout/Newnavbar";
import "./costos.css";
import { useNavigate } from "react-router-dom";

const Cost = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div className="container-principal">
      <NewNavbar />
      <section className="cost-container">
        <div>
          <h1 className="cost-title">Prestacion sin Comisiones</h1>
          <br />
          <p className="cost-paragraph">
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
        <br />

        <ul className="cost-list">
          <li style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <strong style={{ fontFamily: "'Raleway', sans-serif" }}>
              Desarrollo de Tiendas Personalizadas:
            </strong>{" "}
            Diseñamos soluciones de eCommerce completamente ajustadas a tus
            necesidades.
          </li>
          <li style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <strong style={{ fontFamily: "'Raleway', sans-serif" }}>
              Integración de Pasarelas de Pago:
            </strong>{" "}
            Trabajamos con las mejores plataformas de pago, asegurando
            transacciones seguras y fluidas.
          </li>
          <li style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <strong style={{ fontFamily: "'Raleway', sans-serif" }}>
              Optimización de SEO:
            </strong>{" "}
            Nos encargamos de que tu tienda sea fácilmente encontrada por tus
            clientes potenciales en los motores de búsqueda.
          </li>
          <li style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <strong style={{ fontFamily: "'Raleway', sans-serif" }}>
              Soporte Técnico Continuo:
            </strong>{" "}
            Estamos aquí para ayudarte, ofreciendo soporte técnico para asegurar
            que tu tienda funcione de manera óptima en todo momento.
          </li>
          <li style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <strong style={{ fontFamily: "'Raleway', sans-serif" }}>
              Actualizaciones Constantes:
            </strong>{" "}
            Nos mantenemos al día con las últimas tendencias y te proporcionamos
            actualizaciones para mantener tu negocio competitivo.
          </li>
        </ul>

        <p className="cost-paragraph">
          Nuestra misión es proporcionarte todo lo que necesitas para hacer
          crecer tu negocio de manera eficiente y sin costos adicionales
          imprevistos. Si tienes alguna pregunta o te gustaría saber más, no
          dudes en contactarnos.
        </p>

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
