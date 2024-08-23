import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";

const paymentLogos = [
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/custom@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard-debit@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/maestro@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabaldebit@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/falabella@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png",
];

const shippingLogos = [
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/3336@2x.png",
  "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/2682@2x.png",
];

const PaymentShippingLogos = () => {
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
          Medios de Pago
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {paymentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Payment logo ${index}`}
              style={{ height: "30px" }}
            />
          ))}
        </div>
      </div>
      {/*       <div>
        <Typography
          variant="h6"
          style={{
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: "900",
            marginBottom: "1rem",
            color: "#FFFFFF",
            fontSize: isNarrowScreen ? "70%" : "100%",
            marginBottom: "1rem",
            marginTop: "5rem",
          }}
        >
          Medios de Envio
        </Typography>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {shippingLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Shipping logo ${index}`}
              style={{ height: "30px" }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default PaymentShippingLogos;
