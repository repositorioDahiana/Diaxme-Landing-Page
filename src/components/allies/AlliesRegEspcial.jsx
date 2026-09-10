import medicinaIcon from "../../assets/Iconos/profesor.png";

import Eps1 from "../../assets/images/LogoCajacopi.png";
import Eps2 from "../../assets/images/LogoSanitas.webp";
import Eps3 from "../../assets/images/LogoFamisanar.png";
import Eps4 from "../../assets/images/LogoNuevaEps.png";
import Eps5 from "../../assets/images/LogoSaludTotal.webp";
import Eps6 from "../../assets/images/LogoPijaoSalud.png";
import Eps7 from "../../assets/images/LogoPolicia.webp";

const allies = [
    { id: 17, name: "Proteger EPS", icon: Eps1 },
    { id: 18, name: "Eps sanitas", icon: Eps2 },
    { id: 19, name: "Famisanar", icon: Eps3 },
    { id: 20, name: "Nueva EPS", icon: Eps4 },
    { id: 21, name: "Salud Total", icon: Eps5 },
    { id: 22, name: "Pijao salud", icon: Eps6 },
    { id: 38, name: "Regional De Aseguramiento En Salud No.7", icon: Eps7 },

];

function AlliesRegEspcial() {
  return (
    <section className="allies-prepaid" id="regimenEsp">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div className="allies-prepaid__header">

          <div className="allies-prepaid__content">

            <div className="allies-prepaid__icon">

              <img
                src={medicinaIcon}
                alt="Medicina Prepagada"
              />

            </div>

            <div>

              <h2 className="allies-prepaid__title"> 
                Régimen Especial y EPS
              </h2>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="allies-prepaid__grid">

          {allies.map((item, index) => (
            <div className="allies-prepaid__card" key={index}>

              <div className="allies-prepaid__card-icon">

                <img
                  src={item.icon}
                  alt={item.name}
                />

              </div>

              <h3 className="allies-prepaid__card-title">
                {item.name}
              </h3>

              <span className="allies-prepaid__status">
                Convenio activo
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AlliesRegEspcial;