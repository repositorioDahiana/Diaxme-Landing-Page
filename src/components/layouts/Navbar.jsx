import logoRadiolgos from "../../assets/Iconos/logo-radiologos.png";
import logoCedicaf from "../../assets/Iconos/logo-cedicaf.png";
import consultarCitaIcon from "../../assets/Iconos/NavConsulta.png";
import telefonoIcon from "../../assets/Iconos/Telefono.png";
import resultadosIcon from "../../assets/Iconos/Resultados.png";
import pseIcon from "../../assets/Iconos/pse.png";

function Navbar() {
  return (
    <div className="topbar-clean w-full">
      <div className="topbar-inner max-w-full mx-auto px-6 py-2">
        {/* Logos */}
        <div className="topbar-logos">
          <a
            href="https://radiologos.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoRadiolgos}
              className="topbar-logo cedicaf-logo"
              alt="Radiolgos"
            />
          </a>

          <a
            href="https://www.cedicaf.com/cedicaf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoCedicaf}
              className="topbar-logo cedicaf-logo"
              alt="Dioxme"
            />
          </a>
        </div>

        {/* Opciones */}
        <div className="topbar-actions">
          {/* Consultar cita */}
          <a
            href="https://appcedira.com/solicitarcita/public/consultar-cita"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link"
          >
            <div className="icon-box">
              <img src={consultarCitaIcon} alt="Consultar cita" />
            </div>
            <span className="top-link-text hide-mobile-sm">Consultar Cita</span>
          </a>

          {/* Teléfono */}
          <a href="tel:+6063402333" className="top-link phone-link">
            <div className="icon-box">
              <img src={telefonoIcon} alt="Teléfono" />
            </div>
            <span className="top-link-text hide-mobile-md">+606 340 23 33</span>
          </a>

          {/* Resultados */}
          <a
            href="https://nexxa.com.co/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link"
          >
            <div className="icon-box">
              <img src={resultadosIcon} alt="Ver resultados" />
            </div>
            <span className="top-link-text hide-mobile-sm">Ver Resultados</span>
          </a>

          {/* PSE */}
          <a
            href="https://portalpagos.davivienda.com/#/comercio/11396/RADIOLOGOS"
            target="_blank"
            rel="noopener noreferrer"
            className="pse-button"
          >
            <div className="pse-icon-zone">
              <img src={pseIcon} alt="PSE" />
            </div>

            <span className="pse-text hide-mobile-sm">
              Pagos Seguros en Línea
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;