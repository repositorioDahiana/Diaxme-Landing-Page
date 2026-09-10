import logo from "../../assets/Iconos/logo-diaxme.png";
import icontec from "../../assets/Iconos/icontec.png";
import iqnet from "../../assets/Iconos/iqnet.png";
import supersalud from "../../assets/Iconos/supersalud.png";
import telefono from "../../assets/Iconos/Telefono.png";
import email from "../../assets/Iconos/email.png";
import ubicacion from "../../assets/Iconos/Ubicacion.png";
import google from "../../assets/Iconos/google.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + descripción */}
        <div className="footer-col">
          <img
            src={logo}
            className="footer-logo footer-logo--animated"
            alt="Logo Diaxme"
          />

          <a
            href="https://www.google.com/search?sca_esv=88d66a416da09828&sxsrf=ANbL-n5b0zRjEeyG7-S1_r59sVvs80t8GQ:1780581288990&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYXv50Ry-kW5Jl4g29JMBWZTivWAnb8PtbLpGeVE_NBNN1o4YYFoi8rqOTxVSTkFuMSjU5eNwAsFjJtObv24ZaO5KoH8&q=Diaxme+Opiniones&sa=X&ved=2ahUKEwi-hOWZ3u2UAxXHsoQIHeEGN6sQ0bkNegQIKxAH&cshid=1780581318666573&biw=1536&bih=730&dpr=1.25#lrd=0x8e3e2e72880729fb:0xe803ffd57c0f4413,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="google-rating"
          >
            <img
              src={google}
              className="google-mini-logo"
              alt="Google"
            />

            <div className="google-stars">
              ★★★★★
            </div>

            <p className="google-text">
              Califícanos en Google
            </p>
          </a>
        </div>

        {/* Servicios */}
        <div className="footer-col">
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/conocenos">Conócenos</a></li>
            <li><a href="/profesionales">Nuestros profesionales</a></li>
          </ul>

          <div className="footer-logos">
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
              <a href="tel:+608 6836182">+6086836182</a>
            </li>

            <li>
              <img src={ubicacion} alt="Ubicación" />
              <a
                href="https://www.google.com/maps/place/Diaxme/@4.1316563,-73.627189,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3e2e72880729fb:0xe803ffd57c0f4413!8m2!3d4.1316563!4d-73.627189!16s%2Fg%2F11c3xb3f5x?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diaxme Sede Villavicencio Carrera 34 No. 15-33 Barrio Nuevo Ricaurte
              </a>
            </li>
            <li>
              <img src={ubicacion} alt="Ubicación" />
              <a
                href="https://www.google.com/maps/place/Diaxme+Sede+Acac%C3%ADas/@3.9857761,-73.760136,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3e3f001cd17dc3:0xa8116531c56ac7b2!8m2!3d3.9857761!4d-73.760136!16s%2Fg%2F11y3pyslpk?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diaxme Sede Acacías Calle 13 N° 16-58 Primer Piso
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>© 2026 Diaxme. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;