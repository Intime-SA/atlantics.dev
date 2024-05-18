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
import useMediaQuery from "@mui/material/useMediaQuery";
import "./CardsServices.css";

export default function CardsServices() {
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
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd123333.jpg?alt=media&token=6c019fc6-ce82-47fb-a792-b06057afc65a"
          alt="green iguana"
          height={isMobile ? "150px" : "450px"}
        />
        <CardContent sx={{ padding: "2rem" }}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
