import logo from "../../assets/Iconos/logo-diaxme.png";
import icontec from "../../assets/Iconos/icontec.png";
import iqnet from "../../assets/Iconos/iqnet.png";
import supersalud from "../../assets/Iconos/supersalud.png";
import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import ubicacion from "../../assets/Iconos/Ubicacion.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + descripción */}
        <div className="footer-col">
          <img
            src={logo}
            className="footer-logo"
            alt="Logo Diaxme"
          />

          <p>
            Más de 12 años uniendo innovación médica y calidez humana en Villavicencio y 
            Acacías. Especialistas en diagnósticos de alta complejidad con resultados 
            rápidos y confiables.
          </p>
        </div>

        {/* Servicios */}
        <div className="footer-col">
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/conocenos">Conócenos</a></li>
            <li><a href="/profesionales">Nuestros profesionales</a></li>
          </ul>

          <div className="footer-logos">
            <img src={icontec} className="logo-icontec" alt="Icontec" />
            <img src={iqnet} className="logo-iqnet" alt="IQNET" />
            <img src={supersalud} className="logo-supersalud" alt="Supersalud" />
          </div>
        </div>

        {/* Pacientes */}
        <div className="footer-col">
          <ul>
            <li><a href="/citas">Pide tu cita</a></li>
            <li><a href="/especialidades">Especialidades</a></li>
            <li>
              <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                Política de datos
              </a>
            </li>
            <li>
              <a href="/pqrs" target="_blank" rel="noopener noreferrer">
                PQRS
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>

          <ul className="contact-list">
            <li>
              <img src={telefono} alt="Teléfono" />
              <a href="tel:+6063402333">+606 340 23 33</a>
            </li>

            <li>
              <img src={email} alt="Email" />
              <a href="mailto:info@radiologos.co">info@radiologos.co</a>
            </li>

            <li>
              <img src={ubicacion} alt="Ubicación" />
              <a
                href="https://www.google.com/maps/place/Cedicaf+Pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Villavicencio, Meta, Colombia
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>© 2026 Cedicaf. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;