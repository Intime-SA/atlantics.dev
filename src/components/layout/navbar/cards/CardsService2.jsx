import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./CardsServices.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CardsService2() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        width: isMobile ? "350px" : "auto",
        borderRadius: "40px",
        boxShadow: "none",
        height: isMobile ? "60vh" : "auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Write%20a%20sort%20subtitle%20here.%20(1).png?alt=media&token=5c091fac-6f1f-47bf-931f-033a5f1aabfb"
          alt="green iguana"
          height={isMobile ? "150px" : "250px"}
        />
        <CardContent sx={{ padding: "2rem" }}>
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontFamily: "'Jaro', sans-serif", color: "#1976D2" }}
          >
            QR y Gateway de pagos
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            Transacciones rápidas y seguras. Mejora la experiencia del cliente,
            aumenta la seguridad y agiliza tiempos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
