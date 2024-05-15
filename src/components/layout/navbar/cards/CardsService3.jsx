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

export default function CardsService3() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: "25vw",
        borderRadius: "40px",
        width: "25vw",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/mp.png?alt=media&token=cb1cce98-f6a1-4366-8a52-98471cbd8212"
          height="150px"
          alt="green iguana"
          sx={{ objectFit: "cover", size: "cover", boxShadow: "none" }}
        />
        <CardContent sx={{ padding: "1rem", boxShadow: "none" }}>
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontFamily: "'Jaro', sans-serif", color: "#1976D2" }}
          >
            Integraciones Mercado Pago
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            Optimiza tus pagos con Mercado Pago y aprovecha los beneficios.
            Integraciones seguras y eficientes para tu negocio.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "right",
              fontFamily: "'Jaro', sans-serif",
              color: "#1976D2",
            }}
          >
            <strong>Protege a tus clientes</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
