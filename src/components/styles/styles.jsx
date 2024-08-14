import React, { useEffect, useState } from 'react'


// -----> FUENTES:
export const FontStyles = {
   fontFamily: '"Montserrat", sans-serif'
}

// -----> NAVBAR:
/* Estilos para el Navbar */
export const NavbarStyles = {
   height: "8vh",
   width: "60vw",
   display: "flex",
   justifyContent: "center",
   borderRadius: "40px",
   position: "fixed", // Fija la toolbar en una posición
   top: "50%", // Centra verticalmente
   left: "30%",
}


//Estilos para la imagen del navbar/logo
export const LogoAtlantic = {
   width: "3.5rem",
   height: "3.5rem",
   margin: "5px",
   padding: "0px",
   marginLeft: "1.5rem",
}

//Estilos para el componente del navbar
export const NavComponent = {
   display: "flex",
   justifyContent: "center",
   backgroundColor: "transparent",
   borderRadius: "50px",
   marginTop: "3rem",
   position: "fixed", // Fija la toolbar en una posición
   top: "0%", // Centra verticalmente
   left: "30%", // Centra horizontalmente
   transform: "translate(-50%, -50%)", // Ajusta para que quede realmente centrada
}

export const NavBox = {
   display: "flex",
   padding: "0px",
   margin: "0px",
   justifyContent: "center",
   width: "100vw",
}