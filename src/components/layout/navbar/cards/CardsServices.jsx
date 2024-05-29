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
    <Card className="card-services-style">
      <CardActionArea>
        <CardMedia
          className="img-cardservice1"
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/chatgpt.jpg?alt=media&token=c52d79d2-91f4-4dfd-ae66-f2b03cc58122"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="title-cardservice"
            gutterBottom
            variant="h5"
            component="div"
          >
            WhatsApp Bot
          </Typography>
          <Typography
            className="subtitle-cardservice"
            variant="body2"
            color="text.secondary"
          >
            Comunicación instantánea y automatización para tu negocio. Servicio
            personalizado disponbile las 24 horas.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
