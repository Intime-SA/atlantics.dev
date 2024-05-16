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

export default function CardsService2() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "40px",
        boxShadow: "none",
        height: "39vh",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250px"
          image="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Write%20a%20sort%20subtitle%20here..png?alt=media&token=194ea975-be00-4e3a-bd35-52ae11d98b56"
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
            QR y Gateway de pagos
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            Transacciones rápidas y seguras. Mejora la experiencia del cliente,
            con seguridad y adaptandote a la nueva Era.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
