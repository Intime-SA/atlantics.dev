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

export default function CardsService3() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card className="card-services-style">
      <CardActionArea>
        <CardMedia
          className="img-cardservice3"
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/mp.png?alt=media&token=cb1cce98-f6a1-4366-8a52-98471cbd8212"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="title-cardservice"
            gutterBottom
            variant="h5"
            component="div"
          >
            Integraciones Mercado Pago
          </Typography>
          <Typography
            className="subtitle-cardservice"
            variant="body2"
            color="text.secondary"
          >
            Conecta con Mercado Pago y tene el control de tu negocio.
            Integracion facil, rapido y seguro.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
