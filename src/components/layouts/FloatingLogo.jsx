import logo from "../../assets/Iconos/Logo.png";
import { useState, useEffect } from "react";

function FloatingLogo() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 600000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://appcedira.com/solicitarcita/public/solicitud-examen"
      className="floating-logo"
      aria-label="Agenda tu cita"
    >
      <span className={`floating-logo__tooltip ${showTooltip ? "show" : ""}`}>
        Agenda tu cita
      </span>

      <img
        src={logo}
        alt="Logo1"
        className="floating-logo__image"
      />
    </a>
  );
}

export default FloatingLogo;