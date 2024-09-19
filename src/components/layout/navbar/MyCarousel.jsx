import React, { useState, useEffect, useRef } from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { wrap } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MyCarousel = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.down("lg"));

  const cards = [
    {
      icon: "price_change",
      text: "<strong>SIN COMISIONES</strong>",
      route: "https://landing.atlantics.dev/comisiones",
    },
    {
      icon: "paid",
      text: "<strong>PASARELAS DE PAGO</strong>",
      route: "https://landing.atlantics.dev/pasarelas",
    },
    {
      icon: "local_shipping",
      text: "<strong>PLATAFORMAS de CORREO</strong>",
      route: "https://landing.atlantics.dev/shipping",
    },
    {
      icon: "price_change",
      text: "<strong>SIN COMISIONES</strong>",
      route: "https://landing.atlantics.dev/comisiones",
    },
    {
      icon: "paid",
      text: "<strong>PASARELAS DE PAGO</strong>",
      route: "https://landing.atlantics.dev/pasarelas",
    },
    {
      icon: "local_shipping",
      text: "<strong>PLATAFORMAS de CORREO</strong>",
      route: "https://landing.atlantics.dev/shipping",
    },
    {
      icon: "price_change",
      text: "<strong>SIN COMISIONES</strong>",
      route: "https://landing.atlantics.dev/comisiones",
    },
    {
      icon: "paid",
      text: "<strong>PASARELAS DE PAGO</strong>",
      route: "https://landing.atlantics.dev/pasarelas",
    },
    {
      icon: "local_shipping",
      text: "<strong>PLATAFORMAS de CORREO</strong>",
      route: "https://landing.atlantics.dev/shipping",
    },
    {
      icon: "price_change",
      text: "<strong>SIN COMISIONES</strong>",
      route: "https://landing.atlantics.dev/comisiones",
    },
    {
      icon: "paid",
      text: "<strong>PASARELAS DE PAGO</strong>",
      route: "https://landing.atlantics.dev/pasarelas",
    },
    {
      icon: "local_shipping",
      text: "<strong>PLATAFORMAS de CORREO</strong>",
      route: "https://landing.atlantics.dev/shipping",
    },

    // Uncomment and update the following items if needed
    /*
    {
      icon: "security",
      text: "Manejo de datos <strong>PRIVADO y SEGURO</strong>",
      route: "/security",
    },
    {
      icon: "monitoring",
      text: "Reportes y funciones <strong>100% CUSTOMIZABLE</strong>",
      route: "/functions",
    },
    {
      icon: "cloud",
      text: "Servicio disponible <strong>24/7</strong> ¡SIN INTERRUPCIONES!",
      route: "/cloud",
    },
    */
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Cambia de tarjeta cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = carousel.children[0].offsetWidth;
      const offset = cardWidth * currentIndex;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Suponiendo que el índice máximo deseado es 5
      const maxIndex = 5;

      // Si el índice actual es 5, reiniciar a 0, de lo contrario, avanzar al siguiente índice
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "15px",
    padding: "5rem",
    boxShadow: "0 4px 10px rgba(16, 16, 16, 0.7)", // Sombra inicial
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "33vw",
    height: "auto",
    margin: "2rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Añadir transición para la sombra
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: "scale(1.05)", // Añade un pequeño zoom en hover
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)", // Sombra blanca en hover
  };
  const iconContainerStyle = {
    display: "flex",
    fontSize: "7rem",
    marginBottom: "10px",
    color: "white",
    wrap: "no-wrap",
  };

  const cardTextStyle = {
    fontSize: isSmallDesktop ? "0.8rem" : "1.25rem",
    textAlign: "center",
    color: "white",
    width: "50%",
  };

  const cardIconStyle = {
    fontSize: "4rem",
    color: "#a7ffff",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  };

  const carouselStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    position: "relative",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#fff",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    zIndex: 1,
    padding: "0.5rem",
  };

  const gradientStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    pointerEvents: "none",
  };

  const leftGradientStyle = {
    ...gradientStyle,
    left: 0,
    background:
      "linear-gradient(to right, rgba(16, 16, 16, 0.9), rgba(16, 16, 16, 0) 50%)",
  };

  const rightGradientStyle = {
    ...gradientStyle,
    right: 0,
    background:
      "linear-gradient(to left, rgba(16, 16, 16, 0.9), rgba(16, 16, 16, 0) 50%)",
  };

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route.startsWith("http")) {
      // Navega a una URL absoluta externa
      window.location.href = route;
    } else {
      // Si es una ruta relativa, navega internamente usando 'react-router-dom'
      navigate(route);
    }
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyle}>
      <div style={carouselStyle} ref={carouselRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              textDecoration: "none",
              display: "block",
              cursor: "pointer",
            }}
            onClick={() => handleNavigation(card.route)}
          >
            <div
              key={index}
              style={hoveredIndex === index ? cardHoverStyle : cardStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={iconContainerStyle}>
                <span
                  className="material-symbols-outlined"
                  style={cardIconStyle}
                >
                  {card.icon}
                </span>
              </div>
              <div style={{ padding: "2rem" }}>
                <h2
                  style={cardTextStyle}
                  dangerouslySetInnerHTML={{ __html: card.text }}
                ></h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={leftGradientStyle}></div>
      <div style={rightGradientStyle}></div>
      {/* <button style={{ ...arrowStyle, left: "0" }} onClick={handlePrev}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button> */}
      {/*   <button style={{ ...arrowStyle, right: "0" }} onClick={handleNext}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button> */}
    </div>
  );
};

export default MyCarousel;
