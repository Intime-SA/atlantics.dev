import React, { useEffect } from 'react';
import { Divider, Typography, Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './costos.css';

const MainIdeas = () => {
    useEffect(() => {
        AOS.init({
        duration: 2000, // Configura la duración global de las animaciones
        easing: 'ease-out-cubic', // Configura el easing global de las animaciones
        });
    }, []);
  return (
<Box sx={{ padding: '20px' }}>
      {/* Sección 1 */}
      <Box 
        component="h6" 
        sx={{
            fontWeight: 'bold', mb: 1,
            fontFamily: "'Raleway', sans-serif",
            fontSize: '1.3rem'
        }} 
        data-aos="zoom-in-left" // Animación para esta sección
      >
        Costo Inicial Bajo
      </Box>
      <Box 
        component="p" 
        sx={{ 
            mb: 2,
            fontFamily: "'Open Sans', sans-serif",
            textAlign:'justify'
         }}
        data-aos="zoom-in-left" // Animación para este texto
      >
        Ofrecemos un sistema con un costo inicial accesible para que tu negocio pueda comenzar a operar sin grandes inversiones. Esta implementación asegura que los emprendedores y empresas puedan tener una tienda online funcional sin preocupaciones financieras desde el primer día.
      </Box>
      <Divider sx={{ 
        marginY: 2,
        borderColor: '#65BDD2',
        borderBottomWidth: 2 
      }} />

      {/* Sección 2 */}
      <Box 
        component="h6" 
        sx={{
            fontWeight: 'bold', mb: 1,
            fontFamily: "'Raleway', sans-serif",
            fontSize: '1.3rem'
        }} 
        data-aos="zoom-in-right" // Animación para esta sección
      >
        Sin Comisiones sobre Ventas
      </Box>
      <Box 
        component="p" 
        sx={{ 
            mb: 2,
            fontFamily: "'Open Sans', sans-serif",
            textAlign:'justify'
         }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        A diferencia de otras plataformas en el mercado, nuestra solución no retiene comisiones sobre tus ventas. Cada venta que realices es 100% para tu negocio, permitiéndote maximizar tus ingresos sin sorpresas a fin de mes.
      </Box>
      <Divider sx={{ 
        marginY: 2,
        borderColor: '#65BDD2',
        borderBottomWidth: 2 
      }} />

      {/* Sección 3 */}
      <Box 
        component="h6" 
        sx={{
            fontWeight: 'bold', mb: 1,
            fontFamily: "'Raleway', sans-serif",
            fontSize: '1.3rem'
        }} 
        data-aos="zoom-in-left" // Animación para esta sección
      >
        Pago de Mantenimiento
      </Box>
      <Box 
        component="p" 
        sx={{ 
            mb: 2,
            fontFamily: "'Open Sans', sans-serif",
            textAlign:'justify'
        }}
        data-aos="zoom-in-left" // Animación para este texto
      >
        Para mantener tu sistema en óptimas condiciones y garantizar la disponibilidad, ofrecemos un mantenimiento continuo. Este costo se ajusta al uso del servidor y te asegura una plataforma siempre funcional y actualizada.
      </Box>
      <Divider sx={{ 
        marginY: 2,
        borderColor: '#65BDD2',
        borderBottomWidth: 2 
      }} />

      {/* Sección 4 */}
      <Box 
        component="h6" 
        sx={{
            fontWeight: 'bold', mb: 1,
            fontFamily: "'Raleway', sans-serif",
            fontSize: '1.3rem'
        }} 
        data-aos="zoom-in-right" // Animación para esta sección
      >
        Competitividad en el Mercado
      </Box>
      <Box 
        component="p" 
        sx={{ 
            mb: 2,
            fontFamily: "'Open Sans', sans-serif",
            textAlign:'justify'
        }}
        data-aos="zoom-in-right" // Animación para este texto
      >
        Nuestro enfoque está diseñado para superar las barreras que otros proveedores imponen, como comisiones por ventas o altos costos iniciales. Nos comprometemos a ofrecer un servicio más justo y alineado con las necesidades de nuestros clientes.
      </Box>
    </Box>
  );
};

export default MainIdeas;
