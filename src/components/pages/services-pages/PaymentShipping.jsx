import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";

const shippingLogos = [
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/3336@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/2682@2x.png",
];

const PaymentShipping = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "20px",
        color: "white",
        fontFamily: "'Montserrat', sans-serif",
        padding: isNarrowScreen ? "1.2rem" : "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{ marginBottom: "20px", width: isNarrowScreen ? "90%" : "50%" }}
      >
        <div>
          <Typography
            variant="h6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "900",
              marginTop: "3rem",
              color: "#FFFFFF",
              fontSize: isNarrowScreen ? "120%" : "200%",
              marginBottom: "2rem",
            }}
          >
            Medios de Envio
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              width: "100%",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/Customer%20Acquisition%20Cost%20Report%20(1).gif?alt=media&token=66487fc8-5998-4302-bd09-c1b2ad98e250"
              alt=""
              style={{ width: isNarrowScreen ? "120%" : "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentShipping;
