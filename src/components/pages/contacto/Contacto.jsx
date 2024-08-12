import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig"; // Ajusta la ruta según sea necesario
import "./Contacto.css";
import { addDoc, collection } from "firebase/firestore";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

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
        from_name: "Atalntics.Dev",
        from_email: formData.correoElectronico,
        from_phone: "", // Agrega el campo si tienes un teléfono
        message: `Organización: ${formData.organizacion}\nPágina Web: ${formData.paginaWeb}`,
      };

      await emailjs.send(
        "service_yy53n6a", // Tu ID del servicio
        "template_cycnwyi", // Tu ID de la plantilla
        templateParams,
        "HiZortCAfvLTjje7w" // Tu ID de usuario
      );

      console.log("Datos y correo enviados exitosamente");
      setFormData({
        nombreCompleto: "",
        organizacion: "",
        paginaWeb: "",
        correoElectronico: "",
      });
    } catch (error) {
      console.error("Error al enviar datos o correo", error);
    }
  };

  const navItems = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Staff", url: "/staff" },
    { nombre: "Contacto", url: "/contacto" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);

  return (
    <div className="contact-form-container">
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.3)"
              : "transparent", // Fondo semitransparente cuando se desplaza
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque cuando se desplaza
            WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque para Safari cuando se desplaza
          }}
        >
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/00000altanticdev-removebg-preview.png?alt=media&token=933ef3e7-fc96-48ac-bd20-8a43858dceab"
              alt="logo"
              srcset=""
              style={{
                width: "5rem",
                height: "5rem",
                margin: "5px",
                padding: "0px",
              }}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "40%",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.nombre}
                sx={{
                  fontSize: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Link to={item.url} id="asd123" class="typography-animation">
                  <h2>{item.nombre}</h2>
                </Link>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
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
    </div>
  );
};

export default Contacto;
