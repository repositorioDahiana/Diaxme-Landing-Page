import { Link } from "react-router-dom";

import aliado5 from "../../assets/images/LogoColmena.webp"
import aliado7 from "../../assets/images/LogoSenderos.png"
import poliza1 from "../../assets/images/LogoEquidadSeguros.webp";
import poliza2 from "../../assets/images/LogoSeguros.webp";
import poliza3 from "../../assets/images/LogoBMI.webp";
import poliza4 from "../../assets/images/LogoPositiva.webp"
import poliza5 from "../../assets/images/LogoSura.webp"
import Med1 from "../../assets/images/LogoAxaColpatria.webp";
import Med2 from "../../assets/images/LogoColmedica.webp";
import Med3 from "../../assets/images/LogoColsanitas.webp";
import Med4 from "../../assets/images/LogoCoomeva.webp";
import Med5 from "../../assets/images/LogoMedisanitas.webp";
import Med6 from "../../assets/images/LogoMedPlus.webp";
import Eps1 from "../../assets/images/LogoCajacopi.png";
import Eps2 from "../../assets/images/LogoSanitas.webp";
import Eps3 from "../../assets/images/LogoFamisanar.png";
import Eps4 from "../../assets/images/LogoNuevaEps.png";
import Eps5 from "../../assets/images/LogoSaludTotal.webp";
import Eps6 from "../../assets/images/LogoPijaoSalud.png";
import Eps7 from "../../assets/images/LogoPolicia.webp";
import Conve1 from "../../assets/images/LogoEquivida.png";
import Conve2 from "../../assets/images/LogoUnaac.png";
import Conve3 from "../../assets/images/LogoIntegral.png";
import Conve4 from "../../assets/images/LogoMultisalud.png";
import Conve5 from "../../assets/images/LogoIntegrarSa.png";
import Conve6 from "../../assets/images/LogoRadiara.png";
import Conve7 from "../../assets/images/LogoServicioIntegral.png";
import Conve8 from "../../assets/images/LogoSolimed.webp";
import Conve9 from "../../assets/images/LogoLlano.png";
import Conve10 from "../../assets/images/LogoFodegas.png";
import Conve11 from "../../assets/images/LogoUValle.png"
import Conve12 from "../../assets/images/LogoUnad.png";
import Conve13 from "../../assets/images/cofrem.png"

function AgreementsPreview() {
  // Lista única sin clasificar
  const allies = [
    { id: 5, name: "Colmena Seguros", icon: aliado5 },
    { id: 7, name: "Senderos Preferencial", icon: aliado7 },
    
    { id: 8, name: "La Equidad Seguros De Vidad O.C", icon: poliza1 },
    { id: 9, name: "Compañia Mundial De Seguros S.A.", icon: poliza2 },
    { id: 10, name: "BMI Colombia Compañia De Seguros De Vida S.A", icon: poliza3 },
    { id: 32, name: "Positiva Arl", icon: poliza4 },
    { id: 33, name: "Arl Sura", icon: poliza5 },

    { id: 11, name: "Axa Colpatria Medicina Prepagada", icon: Med1 },
    { id: 12, name: "Colmedica Medicina Prepagada", icon: Med2 },
    { id: 13, name: "Colsanitas Integral", icon: Med3 },
    { id: 14, name: "Coomeva Medicina Prepagada S.A", icon: Med4 },
    { id: 15, name: "Medisanitas", icon: Med5 },
    { id: 16, name: "MedPlus Medicina Prepagada", icon: Med6 },

    { id: 17, name: "Cajacopi", icon: Eps1 },
    { id: 18, name: "Eps sanitas", icon: Eps2 },
    { id: 19, name: "Famisanar", icon: Eps3 },
    { id: 20, name: "Nueva EPS", icon: Eps4 },
    { id: 21, name: "Salud Total", icon: Eps5 },
    { id: 22, name: "Pijao salud", icon: Eps6 },
    { id: 38, name: "Regional De Aseguramiento En Salud No.7", icon: Eps7 },

    { id: 23, name: "Equivida Salud Ocupacional S.A", icon: Conve1 },
    { id: 25, name: "Integral Ips", icon: Conve3 },
    { id: 26, name: "Multisalud SAS", icon: Conve4 },
    { id: 27, name: "Integrar Salud Y Seguridad S.A.S", icon: Conve5 },
    { id: 28, name: "Radiara Red De Especialistas", icon: Conve6 },
    { id: 29, name: "Servicios Integrales De Especialistas En Alivio Del Dolor Y Rehabilitacion SA", icon: Conve7 },
    { id: 30, name: "IPS Solimed JD SAS", icon: Conve8 },
    { id: 31, name: "Tecnologia Especializada En Salud Del Meta SAS", icon: Conve9 },
    { id: 34, name: "Fondo de empleados de Grupo de llano -Fodegas", icon: Conve10 },
    { id: 35, name: "Universidad de los llanos ", icon: Conve11 },
    { id: 36, name: "Universidad Nacional -Unad", icon: Conve12 },
    { id: 37, name: "caja de compensacion Cofrem", icon: Conve13},

  ];

  return (
    <section className="agreements-preview">
      <div className="agreements-preview__container">
        <div className="agreements-preview__header">
          <h2 className="agreements-preview__title">
            Nuestros <span>Convenios</span>
          </h2>
          <p className="agreements-preview__description">
            Trabajamos con las principales aseguradoras, entidades y empresas del país para brindarte un servicio accesible y de calidad.
          </p>
          <div className="agreements-preview__line"></div>
        </div>

        {/* Carrusel horizontal único */}
        <div className="agreements-preview__marquee-container">
          <div className="agreements-preview__marquee">
            {/* Duplicamos la lista para la animación continua */}
            {[...allies, ...allies].map((ally, index) => (
              <div key={`${ally.id}-${index}`} className="agreements-preview__ally">
                <img src={ally.icon} alt={ally.name} className="agreements-preview__ally-icon" />
                <span className="agreements-preview__ally-name">{ally.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="agreements-preview__actions">
          <Link to="/allies" className="btn btn-primary-brand">
            Ver todos los convenios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AgreementsPreview;