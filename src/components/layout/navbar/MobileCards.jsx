import React from "react";
import { useNavigate } from "react-router-dom";
import { FontStyles } from "../../styles/styles";

const MobileCards = () => {
  const cards = [
    {
      icon: "price_change",
      text: "<strong>SIN COMISIONES</strong>",
      route: "/cost",
    },
    {
      icon: "paid",
      text: "<strong>PASARELAS DE PAGO</strong>",
      route: "https://landing.atlantics.dev/pasarelas",
    },
    {
      icon: "local_shipping",
      text: "<strong>PLATAFORMAS de CORREO</strong>",
      route: "/shipping",
    },
  ];

  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 4px 10px rgba(16, 16, 16, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "350px",
    margin: "1rem auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    marginTop: "3rem",
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
    fontSize: "1rem",
    textAlign: "center",
    color: "white",
    padding: "1rem",
    ...FontStyles,
  };
  const handleNavigation = (route) => {
    if (route.startsWith("http")) {
      // Navega a una URL absoluta externa
      window.location.href = route;
    } else {
      // Si es una ruta relativa, navega internamente usando 'react-router-dom'
      navigate(route);
    }
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          style={cardStyle}
          onClick={() => handleNavigation(card.route)}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, cardHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, cardStyle);
          }}
        >
          <div style={iconContainerStyle}>
            <span className="material-symbols-outlined">{card.icon}</span>
          </div>
          <h2
            style={cardTextStyle}
            dangerouslySetInnerHTML={{ __html: card.text }}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileCards;
