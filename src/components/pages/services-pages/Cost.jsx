<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewNavbar from '../../layout/Newnavbar';
import { styled } from '@mui/system';
import './costos.css';
import MainIdeas from './MainIdeas';


const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0',
});

const ImageContent = styled('img')({
  width: '40vw',
  height: 'auto',
});
=======
import React from "react";
import NewNavbar from "../../layout/Newnavbar";
import "./costos.css";
import { useNavigate } from "react-router-dom";
>>>>>>> c527af0e11873e6527596051b363c858931549d0

const Cost = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <div className="container-principal">
      <NewNavbar />
      
      <section className="cost-container">
<<<<<<< HEAD
      <div className='cost-main'>
          <h1 className="cost-title" data-aos="fade-down">Costos y Servicios</h1>
          <p className="cost-paragraph" 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
          En <strong style={{fontFamily:"'Montserrat', sans-serif"}}>Atlantics.dev</strong>, desarrollamos software pensado para optimizar tu negocio de eCommerce. Nuestras soluciones te permiten avanzar sin interrupciones ni costos inesperados, manteniéndote enfocado en el crecimiento.
          </p>
        </div>

        <ImageContainer>
          <ImageContent src="/public/Grafico-ingresos.png" alt="Grafico de ingresos" />
        </ImageContainer>
        <div style={{
          width:'50%',
          display:'flex',
          justifyContent:'center',
        }}>
        <MainIdeas />
        </div>
      {/* <h2 className="cost-heading">Prestaciones</h2>
      <p className="cost-paragraph">
        Ofrecemos un conjunto integral de servicios que abarcan desde la creación de tiendas online personalizadas hasta la optimización continua para mejorar tu presencia digital. Aquí está un desglose de lo que puedes esperar:
      </p>

      <ul className="cost-list">
        <li style={{fontFamily:"'Open Sans', sans-serif"}}><strong style={{fontFamily:"'Raleway', sans-serif"}}>Desarrollo de Tiendas Personalizadas:</strong> Diseñamos soluciones de eCommerce completamente ajustadas a tus necesidades.</li>
        <li style={{fontFamily:"'Open Sans', sans-serif"}}><strong style={{fontFamily:"'Raleway', sans-serif"}}>Integración de Pasarelas de Pago:</strong> Trabajamos con las mejores plataformas de pago, asegurando transacciones seguras y fluidas.</li>
        <li style={{fontFamily:"'Open Sans', sans-serif"}}><strong style={{fontFamily:"'Raleway', sans-serif"}}>Optimización de SEO:</strong> Nos encargamos de que tu tienda sea fácilmente encontrada por tus clientes potenciales en los motores de búsqueda.</li>
        <li style={{fontFamily:"'Open Sans', sans-serif"}}><strong style={{fontFamily:"'Raleway', sans-serif"}}>Soporte Técnico Continuo:</strong> Estamos aquí para ayudarte, ofreciendo soporte técnico para asegurar que tu tienda funcione de manera óptima en todo momento.</li>
        <li style={{fontFamily:"'Open Sans', sans-serif"}}><strong style={{fontFamily:"'Raleway', sans-serif"}}>Actualizaciones Constantes:</strong> Nos mantenemos al día con las últimas tendencias y te proporcionamos actualizaciones para mantener tu negocio competitivo.</li>
      </ul>

      <p className="cost-paragraph">
        Nuestra misión es proporcionarte todo lo que necesitas para hacer crecer tu negocio de manera eficiente y sin costos adicionales imprevistos. Si tienes alguna pregunta o te gustaría saber más, no dudes en contactarnos.
      </p> */}
=======
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
>>>>>>> c527af0e11873e6527596051b363c858931549d0

        <button
          className="contact-button"
          onClick={() => handleNavigation("/contacto")}
        >
          Contáctanos para más detalles
        </button>
      </section>
    </div>
  );
<<<<<<< HEAD
}

export default Cost;
=======
};
export default Cost;
>>>>>>> c527af0e11873e6527596051b363c858931549d0
