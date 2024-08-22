import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Staff.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Staff = () => {
  const theme = useTheme();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navItems = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Staff", url: "/staff" },
    { nombre: "Contacto", url: "/contacto" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Añadir un pequeño retraso para la animación
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Ajusta el tiempo de retraso

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg" className="home-container">
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          width: "40vw",
          borderRadius: "50px",
          marginTop: "3rem",
          position: "fixed", // Fija la toolbar en una posición
          top: "0%", // Centra verticalmente
          left: "30%", // Centra horizontalmente
          transform: "translate(-50%, -50%)", // Ajusta para que quede realmente centrada
        }}
      >
        <Toolbar
          style={{
            height: "8vh",
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.3)"
              : "transparent", // Fondo semitransparente cuando se desplaza
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque cuando se desplaza
            WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Desenfoque para Safari cuando se desplaza
            borderRadius: "40px",
            position: "fixed", // Fija la toolbar en una posición
            top: "50%", // Centra verticalmente
            left: "0%",

            // Opcional: bordes redondeados
          }}
        >
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Pesta%C3%B1aLogo%2FSinFondoLogo.png?alt=media&token=8a59df40-df50-4c65-8677-43a9fee55622"
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
          {isVisible && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: isMobile ? "100%" : "40%",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.nombre}
                  sx={{
                    fontSize: "2rem",
                    position: "relative",
                    opacity: isVisible ? 1 : 0, // Cambia la opacidad de 0 a 1
                    transition:
                      "opacity 2s ease-in-out, transform 2s ease-in-out",
                    transform: isVisible ? "translateY(0)" : "translateY(10px)", // Desplazamiento vertical más leve
                  }}
                >
                  <Link to={item.url} id="asd123">
                    <h2>{item.nombre}</h2>
                  </Link>
                </Typography>
              ))}

              {isMobile && (
                <div>
                  <Link
                    to="/contacto"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button onClick={() => handleDrawerToggle()}>
                      <span
                        class="material-symbols-outlined"
                        style={{ color: "#63747b" }}
                      >
                        menu
                      </span>
                    </Button>
                  </Link>
                </div>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <section
        className="hero-section"
        style={{
          color: "#ffffff",
          borderRadius: "50px",
          marginBottom: "5rem",
          marginTop: "1rem",
          height: "30%",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="typography-animation"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1976d2",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Agregar sombreado al texto
              marginTop: "5rem",
            }}
          >
            <h1 className="fontRubikMonoOne">Staff</h1>
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "'Jaro', sans-serif",
              fontSize: "120%",
              color: "#1976d2",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", // Agregar sombreado al texto
              marginTop: "1rem",
              width: "100%",
            }}
            gutterBottom
          >
            <h2 className="h2-animation" style={{ width: "100%" }}>
              "A motivated team, united by a common purpose, is the most
              powerful creative force..."
            </h2>
          </Typography>
        </Container>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: isMobile ? "25rem" : "1rem",
          }}
        >
          <span
            style={{
              fontSize: "600%",
              color: "white",
              animation: "float 2s ease-in-out infinite",
            }}
            className="material-symbols-outlined"
          >
            keyboard_double_arrow_down
          </span>
        </div>
        <style>
          {`
          @keyframes float {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
        </style>
      </section>
      <div className="equipo">
        <div className="integrante">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/CambioUrl.png?alt=media&token=94aa2e43-12bd-4806-94ce-3e75967627db"
            alt="logoRama"
            srcset=""
            className="fotoTeam"
          />

          <h1>Ramiro Martin Arce</h1>
          <div>
            <h2>
              CEO & cofunder @ atlantics.dev | Project Coordinator | DevOps
              Specialist | Cloud Solutions | Scrum Master | Manager Databases
            </h2>
          </div>
          <div>
            <br />
            <br />
            <h3>
              Desarrollador de Software con más de 7 años de experiencia en la
              industria Tech, tiene una trayectoria notable. Inició su carrera
              como Proyect Manager en una startup de préstamos personales, donde
              adquirió la habilidad de identificar los desafíos empresariales y
              los puntos de dolor en las relaciones comerciales con empresas de
              software.
              <br />
              <br />
              En su rol actual como{" "}
              <strong>
                Project Coordinator & DevOps Specialist en @atlantics.dev
              </strong>
              , lidera un equipo que ofrece soluciones innovadoras para empresas
              en la nueva era digital. Se destaca por su capacidad para traducir
              necesidades comerciales en requisitos técnicos, planificar y
              ejecutar proyectos ágiles con un enfoque en la satisfacción del
              cliente y la coordinación de equipos.
              <br />
              <br />
              Su experiencia incluye el manejo comercial con proveedores líderes
              como <strong>Vercel, Firebase, AWS y Google Cloud</strong> para
              implementar soluciones serverless, despliegues en la nube y
              contenerización utilizando Docker. <br />
              Su experiencia se extiende al diseño e implementación de pipelines
              eficientes para automatizar flujos de desarrollo y garantizar la
              entrega de proyectos sin contratiempos, orquestando las diferentes
              áreas involucradas en cada proceso.
              <br />
              <br />
              Especializado en metodologías de trabajo{" "}
              <strong>Agile-Scrum</strong>, con certificaciones{" "}
              <strong>ITIL y PMI Waterfall</strong> obtenidas en Digital House,
              Ramiro tiene un enfoque riguroso en la gestión de proyectos,
              respetando las distintas ceremonias dentro de cada sprint.
              Actualmente, está persiguiendo la certificación #CTD en
              DigitalHouse para fortalecer sus habilidades en infraestructura de
              micro-servicios.
            </h3>
          </div>
        </div>
        <div className="integrante">
          <div
            style={{ width: "100%", textAlign: "right", marginTop: "15rem" }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEYBMSyhgCIHQ/profile-displayphoto-shrink_800_800/0/1675287129289?e=1729123200&v=beta&t=8rdHfSBFx1BazjqjCmhnKo7Ejv10PbNxrgjATBD8HL4"
              alt="Ingeniero de Software"
              className="fotoTeam"
            />
            <h1 style={{ color: "white" }}>Federico Larrea</h1>
            <div>
              <h2>Software Engineer & DevOps Arquitec en @atlantics.dev</h2>
            </div>
            <h3>
              Mercado Libre
              <br />
              Argentina
              <br />
              <br />
            </h3>
          </div>

          <div>
            <br />
            <br />

            <h3>
              Federico Larrea es un apasionado ingeniero de sistemas
              especializado en base de datos, con una sólida experiencia en el
              mantenimiento de grandes conjuntos de datos. Actualmente, reside
              en Buenos Aires, Argentina, donde se encuentra prestando servicios
              en <strong>Mercado Libre</strong>
              .
              <br />
              <br />
              En su rol actual como{" "}
              <strong>
                Software Engineer & DevOps Arquitec en @atlantics.dev
              </strong>
              , Federico se encarga de la creación y optimización de
              infraestructura. Sus principales habilidades se basan en
              automatizar todos los procesos de entrega continua a clientes
              (CD/CI)
              <br />
              <br />
              Federico maneja una amplia variedad de tecnologías y herramientas
              modernas. Es experto en Elixir, .NET, React y SQL Server, lo que
              le permite abordar proyectos complejos y garantizar su correcto
              funcionamiento y escalabilidad. Además
              <br />
              <br />
            </h3>
          </div>
        </div>
        <div className="integrante">
          <div style={{ width: "100%", marginTop: "15rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/RodrigoSilva.jpeg?alt=media&token=005632f0-c198-4bae-98c9-e99a5d5a5393"
              alt="Rodrigo Silva"
              className="fotoTeam"
            />
          </div>
          <h1>Rodrigo Silva</h1>

          <div>
            <h2>
              Front-End Developer @ atlantics.dev | UI/UX Designer | JavaScript
              | React | CSS | HTML | Agile Methodologies | LegalTech
            </h2>
          </div>
          <div>
            <br />
            <br />
            <h3>
              Rodrigo Silva es un apasionado desarrollador de software
              especializado en Front-End, con una sólida base en diseño de
              interfaces de usuario y experiencia de usuario. Actualmente,
              reside en Byron Bay, Australia, donde se encuentra expandiendo los
              horizontes comerciales
              <br />
              <br />
              Rodrigo comenzó su carrera estudiando abogacía y software, una
              combinación poco convencional que le permitió desarrollar una
              perspectiva única en el campo de la tecnología, especialmente en
              el sector de LegalTech. Tras completar su educación, decidió
              seguir su pasión por el desarrollo web y se especializó en el
              desarrollo Front-End.
              <br />
              <br />
              En su rol actual como{" "}
              <strong>Front-End Developer en @atlantics.dev</strong>, Rodrigo se
              encarga de la creación y optimización de interfaces de usuario
              atractivas y funcionales. Su habilidad se trata de transformar
              ideas y requisitos en productos digitales efectivos y
              estéticamente agradables.
              <br />
              <br />
              Su experiencia incluye el uso de tecnologías y herramientas
              modernas como{" "}
              <strong>React, JavaScript, CSS, y HTML, nodeJS</strong>, así como
              metodologías ágiles para garantizar la entrega oportuna y
              eficiente de proyectos. Rodrigo también tiene un profundo interés
              en la intersección de la tecnología y el derecho, explorando cómo
              las soluciones digitales pueden mejorar el acceso y la
              administración de servicios legales y validaciones impositivas.
              <br />
              <br />
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Staff;
