import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Esto asegura que la página se cargue en la parte superior
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Actualiza el estado si el usuario ha desplazado la página
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el evento cuando el componente se desmonta
    };
  }, []);

  return (
    <div
      className={`footer-container ${isScrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.3)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: "4.5vh",
        zIndex: 1,
      }}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/00000altanticdev-removebg-preview.png?alt=media&token=933ef3e7-fc96-48ac-bd20-8a43858dceab"
        alt="Logo"
        className="logo" // Cambié 'class' a 'className'
      />
      <p className="copyright">Copyright &copy; 2024 | Atlantics.dev</p>
    </div>
  );
};

export default Footer;
