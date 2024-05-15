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

export default function CardsServices() {
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
          image="https://assets-global.website-files.com/64cb8feadae4f2e5a069eb86/64fc664b8f4d3af0f389e06d_Chatgpt.jpg"
          alt="green iguana"
          height="150px"
        />
        <CardContent sx={{ padding: "1rem" }}>
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontFamily: "'Jaro', sans-serif", color: "#1976D2" }}
          >
            WhatsApp Bot
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            Comunicación instantánea y automatización para tu negocio. Servicio
            personalizado disponbile las 24 horas.
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
            <strong>Transforma tu negocio</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
