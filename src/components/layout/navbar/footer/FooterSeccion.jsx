import React, { useState } from "react";
import {
  Button,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FooterSeccion = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState({
    contact: false,
    staff: false,
    work: false,
  });

  const handleNavigationClick = (path, type) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      // Simula un pequeño retraso para ver el loading
      navigate(path);
      setLoading((prev) => ({ ...prev, [type]: false }));
    }, 1500); // Ajusta este tiempo para simular la carga
  };

  return (
    <div
      style={{
        backgroundColor: "#171717",
        color: "white",
        height: "500px",
        width: "100%",
        padding: isMobile ? "1rem" : "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10rem",
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigationClick("/contacto", "contact")}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
            margin: "1rem",
            borderRadius: "50px",
            marginBottom: "5rem",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {loading.contact ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <>
              <span
                className="material-symbols-outlined"
                style={{ padding: isMobile ? "0.5rem 0.5rem" : "0.75rem" }}
              >
                add_circle
              </span>{" "}
              INFO
            </>
          )}
        </Button>
      </Stack>

      <Typography
        variant="h2"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          marginBottom: isMobile ? "1rem" : "2rem",
          textAlign: "center",
          fontSize: isMobile ? "1.5rem" : "2.5rem",
        }}
      >
        ¿Queres saber mas?
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleNavigationClick("/staff", "staff")}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {loading.staff ? (
            <>
              <span
                style={{
                  margin: isMobile ? "0.5rem" : "0.75rem",
                }}
                className="material-symbols-outlined"
              >
                <CircularProgress size={24} color="inherit" />
              </span>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Nuestro STAFF
              </h3>
            </>
          ) : (
            <>
              <span
                style={{
                  margin: isMobile ? "0.5rem" : "0.75rem",
                }}
                className="material-symbols-outlined"
              >
                groups
              </span>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Nuestro STAFF
              </h3>
            </>
          )}
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => handleNavigationClick("/trabaja-con-nosotros", "work")}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {loading.work ? (
            <>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Trabaja con Nosotros
              </h3>
              <span
                style={{
                  margin: isMobile ? "0.5rem" : "0.75rem",
                }}
                className="material-symbols-outlined"
              >
                <CircularProgress size={24} color="inherit" />
              </span>
            </>
          ) : (
            <>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Trabaja con Nosotros
              </h3>
              <span
                style={{
                  margin: isMobile ? "0.5rem" : "0.75rem",
                }}
                className="material-symbols-outlined"
              >
                contact_mail
              </span>
            </>
          )}
        </Button>
      </Stack>
    </div>
  );
};

export default FooterSeccion;
