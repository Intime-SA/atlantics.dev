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
    <Card
      className=""
      sx={{
        borderRadius: "40px",
        height: isMobile ? "50vh" : "39vh",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/mp.png?alt=media&token=cb1cce98-f6a1-4366-8a52-98471cbd8212"
          height="250px"
          alt="green iguana"
          sx={{ objectFit: "cover", size: "cover" }}
        />
        <CardContent sx={{ padding: "2rem" }}>
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
            Conecta con Mercado Pago y tene el control de tu negocio.
            Integracion facil, rapido y seguro.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
