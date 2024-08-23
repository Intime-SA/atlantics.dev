import React from "react";
import { useNavigate } from "react-router-dom";

const MobileCards = () => {
  const cards = [
    {
      icon: "paid",
      text: "INTEGRACIONES con TODAS las pasarelas de pago",
      route: "/pagos",
    },
    {
      icon: "local_shipping",
      text: "Convenios con PLATAFORMAS de Correo/Shipping",
      route: "/shipping",
    },
    {
      icon: "cloud",
      text: "Servicio disponible 24/7 ¡SIN INTERRUPCIONES!",
      route: "/cloud",
    },
    {
      icon: "security",
      text: "Manejo de datos PRIVADO y SEGURO",
      route: "/security",
    },
    {
      icon: "price_change",
      text: "¡SIN COMISIONES! sobre tus Ventas",
      route: "/cost",
    },
  ];

  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    padding: "2rem", // Ajuste del padding para dispositivos móviles
    boxShadow: "0 4px 10px rgba(16, 16, 16, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "350px", // Mínimo ancho de 350px
    margin: "1rem auto", // Centrar las tarjetas y añadir margen vertical
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)",
  };

  const iconContainerStyle = {
    fontSize: "6rem",
    marginBottom: "1rem",
    color: "#a7ffff",
  };

  const cardTextStyle = {
    fontSize: "1rem", // Tamaño de fuente ajustado para mobile
    textAlign: "center",
    color: "white",
    padding: "1rem",
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          style={cardStyle}
          onClick={() => handleNavigation(card.route)}
          onMouseEnter={(e) => (e.currentTarget.style = cardHoverStyle)}
          onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
        >
          <div style={iconContainerStyle}>
            <span className="material-symbols-outlined">{card.icon}</span>
          </div>
          <h2 style={cardTextStyle}>{card.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default MobileCards;
