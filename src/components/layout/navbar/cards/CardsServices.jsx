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
import '../../../layout/css/styles.css';

export default function CardsServices() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let objetoCards = [
    {
      imagen: "https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd123333.jpg?alt=media&token=6c019fc6-ce82-47fb-a792-b06057afc65a",
      titulo: 'WhatsApp Bot',
      parrafo: 'Comunicación instantánea y automatización para tu negocio. Servicio personalizado disponbile las 24 horas',
    },
    {
      imagen:"https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Write%20a%20sort%20subtitle%20here..png?alt=media&token=194ea975-be00-4e3a-bd35-52ae11d98b56" ,
      titulo:'QR y Gateway de pagos' ,
      parrafo:'Transacciones rápidas y seguras. Mejora la experiencia del cliente, con seguridad y adaptandote a la nueva Era.',
    },
    {
      imagen:"https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/mp.png?alt=media&token=cb1cce98-f6a1-4366-8a52-98471cbd8212" ,
      titulo:'Integraciones Mercado Pago' ,
      parrafo:'Conecta con Mercado Pago y tene el control de tu negocio. Integracion facil, rapido y seguro.',
    },
  ] 

  return (
    <>
    {objetoCards.map((card,index)=>(
      <Card 
        key={index}
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
          image= {card.imagen}
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
            {card.titulo}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {card.parrafo}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    ))}
    </>
  );
}
