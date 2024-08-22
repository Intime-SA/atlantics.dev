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
        <button
          className="contact-button"
          onClick={() => handleNavigation("/contacto")}
        >
          Contáctanos para más detalles
        </button>
      </section>
    </div>
  );
}

export default Cost;
