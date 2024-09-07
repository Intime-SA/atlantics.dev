import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig"; // Ajusta la ruta según sea necesario
import "./Contacto.css";
import { addDoc, collection } from "firebase/firestore";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // Importar ToastContainer y toast
import "react-toastify/dist/ReactToastify.css"; // Importar estilos
import NewNavbar from "../../layout/Newnavbar";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    organizacion: "",
    paginaWeb: "",
    correoElectronico: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Agregar datos a Firestore
      await addDoc(collection(db, "atlantics.dev"), formData);

      // Enviar correo electrónico usando EmailJS
      const templateParams = {
        to_name: formData.nombreCompleto,
        from_name: formData.nombreCompleto,
        from_email: formData.correoElectronico,
        from_phone: "", // Agrega el campo si tienes un teléfono
        organizacion: `Organización: ${formData.organizacion}\nPágina Web: ${formData.paginaWeb}`,
      };

      await emailjs.send(
        "service_375g9fs", // Tu ID del servicio
        "template_cycnwyi", // Tu ID de la plantilla
        templateParams,
        "HiZortCAfvLTjje7w" // Tu ID de usuario
      );

      // Mostrar notificación de éxito
      toast.success("Correo enviado exitosamente");

      // Limpiar formulario
      setFormData({
        nombreCompleto: "",
        organizacion: "",
        paginaWeb: "",
        correoElectronico: "",
      });
    } catch (error) {
      console.error("Error al enviar datos o correo", error);
      toast.error("Error al enviar el correo");
    }
  };

  const navItems = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Staff", url: "/staff" },
    { nombre: "Contacto", url: "/contacto" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Esto hace que la animación se active después de que el componente se monta
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Tiempo de retraso opcional antes de que la animación comience

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  return (
    <div className="contact-form-container">
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "40%",
        }}
      >
      <NewNavbar/>
      </Box>
        
      
      <div className="contact-form-container">
        <div className="div50">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: "0px",
            }}
            src="https://www.unafreelancer.com/wp-content/uploads/2019/10/Hot-Desks-1140x760.jpg"
            alt=""
          />
        </div>
        <div className="div50">
          <div className="datosEmpresa">
            <h2>@atlantics.dev</h2>
            <h3>
              Dirección: Av. Sta. Fe 2755 piso 1, C1425 Cdad. Autónoma de Buenos
              Aires
            </h3>
            <h3>(011) 6870-2318</h3>
          </div>
          <div></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="nombreCompleto">
              <h3>Nombre Completo</h3>
            </label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              required
            />

            <label htmlFor="organizacion">
              <h3>Organización</h3>
            </label>
            <input
              type="text"
              id="organizacion"
              name="organizacion"
              value={formData.organizacion}
              onChange={handleChange}
              required
            />

            <label htmlFor="paginaWeb">
              <h3>Página Web (opcional)</h3>
            </label>
            <input
              id="paginaWeb"
              name="paginaWeb"
              value={formData.paginaWeb}
              onChange={handleChange}
            />

            <label htmlFor="correoElectronico">
              <h3>Correo Electrónico</h3>
            </label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              value={formData.correoElectronico}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contacto;
