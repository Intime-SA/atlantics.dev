import React from "react";
import "./layout/navbar/Navbar.css";

const SeccionClientes = () => {
  return (
    <div>
      {" "}
      <div class="container">
        <div class="icon2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Brown_Minimalist_Store_Highlight_Covers-removebg-preview.png?alt=media&token=8cbdbe5b-2f89-43e2-a01f-bedf6ce60a2b"
            alt="Icono grande"
          />
        </div>
        <div style={{ marginBottom: isMobile ? "20rem" : "0rem" }}>
          <h3 className="titulosTrabajos">
            SISTEMA DE ADMINISTRACION DE VENTAS / STOCK + E-COMMERCE
          </h3>
          <Link to="https://www.mayoristakaurymdp.com">
            <h4 id="asd1232" class="typography-animation">
              www.mayoristakaurymdp.com
            </h4>
          </Link>
        </div>

        <div class="cards-container">
          <div class="cardJobs2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/1.png?alt=media&token=abfcf2f5-844d-42d6-8915-e5bce9119bb9"
              alt="Project 1"
              width="600px"
              style={{ padding: 0, margin: 0 }}
            />
          </div>
          <div class="cardJobs">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/asd1232mobile.png?alt=media&token=2c97c53a-8c9a-416d-bf9d-30779cf25f94"
              alt="Project 1"
              width="300px"
              style={{ padding: 0, margin: 0, objectFit: "contain" }}
              sizes="contain"
            />
          </div>
        </div>
      </div>
      <div class="pre-container4">
        <h3
          className="titulosTrabajos"
          style={{
            marginTop: "25rem",
            fontSize: "2rem",
          }}
        >
          SISTEMA DE COBRANZAS BANCARIAS
        </h3>
        <Link to="https://www.invertimeonline.com">
          <h4
            id="asd1232"
            class="typography-animation"
            style={{ textAlign: "right" }}
          >
            www.invertimeonline.com
          </h4>
        </Link>
        {isMobile && (
          <div class="checklist">
            <h4 class="checklist2">Automatización de cobranzas</h4>

            <ul>
              <li>Integración con servicios web de bancos</li>
              <li>Generación automática de solicitudes de cobro</li>
              <li>Seguimiento de pagos y conciliación bancaria</li>
            </ul>
            <br />
            <h4 class="checklist2">Gestión de facturas electrónicas</h4>
            <ul>
              <li>Emisión de facturas electrónicas</li>
              <li>Envío automático de facturas a clientes</li>
              <li>Validación de facturas según normativa vigente</li>
            </ul>
            <h4 class="checklist2">Reportes y análisis</h4>
            <ul>
              <li>Generación de reportes de cobranza</li>
              <li>Análisis de datos de pago y rendimiento</li>
              <li>Exportación de datos a formatos compatibles (Excel, PDF)</li>
            </ul>
          </div>
        )}

        <div class="icon2" id="webservice">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/png-transparent-amazon-logo-cloud-computing-amazon-web-services-web-hosting-service-computer-servers-internet-hosting-service-computer-hardware-information-technology-removebg-preview.png?alt=media&token=c56ce276-6446-4167-a453-9eeade9278fd"
            alt="Icono grande"
          />
        </div>

        <div class="icon" id="lineasIcon">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/Dise%C3%B1o_sin_t%C3%ADtulo__2_-removebg-preview.png?alt=media&token=f0059d3c-c996-4d45-b6b2-59a2a9f3e1ad"
            alt="Icono grande"
          />
        </div>

        <div class="cards-container" style={{}}>
          <div class="cardJobs2" id="center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/cobranzaINT.png?alt=media&token=0432bad0-f742-4d3e-9704-09323466237e"
              alt="Project 1"
              width="600px"
              style={{ padding: 0, margin: 0 }}
            />
          </div>
          <div class="cardJobs" id="center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/cobranzasv2.png?alt=media&token=c67c7fb7-5171-476f-bb65-5b5e8b6066fd"
              alt="Project 1"
              width="250px"
              style={{ padding: 0, margin: 0 }}
              sizes="contain"
            />
          </div>
          <div>
            {!isMobile && (
              <div class="checklist">
                <h4 class="checklist2">Automatización de cobranzas</h4>

                <ul>
                  <li>Integración con servicios web de bancos</li>
                  <li>Generación automática de solicitudes de cobro</li>
                  <li>Seguimiento de pagos y conciliación bancaria</li>
                </ul>
                <br />
                <h4 class="checklist2">Gestión de facturas electrónicas</h4>
                <ul>
                  <li>Emisión de facturas electrónicas</li>
                  <li>Envío automático de facturas a clientes</li>
                  <li>Validación de facturas según normativa vigente</li>
                </ul>
                <h4 class="checklist2">Reportes y análisis</h4>
                <ul>
                  <li>Generación de reportes de cobranza</li>
                  <li>Análisis de datos de pago y rendimiento</li>
                  <li>
                    Exportación de datos a formatos compatibles (Excel, PDF)
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="pre-container5">
        <div style={{ marginRight: "20px", gap: "50px" }}>
          <h3 className="titulosTrabajos">
            SISTEMA DE PEDIDOS / VENDEDORES - DISTRIBUIDORA
          </h3>
          <Link
            style={{ textAlign: "right", margin: "1rem" }}
            to="https://www.instagram.com/alimentosnaturalesmdq/"
          >
            <h4 id="asd1232">@alimentosnaturalesmdp</h4>
          </Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Arturo+Alio+3198,+Mar+del+Plata,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              {" "}
              <span
                style={{ margin: "1rem" }}
                class="material-symbols-outlined"
              >
                pin_drop
              </span>
              Arturo Alio 3198, Mar del Plata, Argentina
            </h4>
          </a>
          <a href="tel:+542234543960">
            <h4>
              <span
                style={{ margin: "1rem" }}
                class="material-symbols-outlined"
              >
                call
              </span>
              0223 454-3960
            </h4>
          </a>
        </div>
        <div class="cards-container">
          <div class="cardJobs2" id="center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales2desktop.png?alt=media&token=0b3cdb21-cf43-4e4b-91c0-c0288b7361d6"
              alt="Project 1"
              width="600px"
              style={{ padding: 0, margin: 0 }}
            />
          </div>

          <div class="cardJobs" id="center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tallernaval2.appspot.com/o/alimentosNaturales.png?alt=media&token=621f3624-4377-4440-9331-9bf7dbe976a3"
              np
              alt="Project 1"
              width="200px"
              style={{ padding: 0, margin: 0 }}
              sizes="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionClientes;
