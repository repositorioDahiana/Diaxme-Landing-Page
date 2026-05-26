import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/email.png";

import Icono1 from "../../assets/Iconos/email.png";
import Icono2 from "../../assets/Iconos/email.png";
import Icono3 from "../../assets/Iconos/email.png";
import Icono4 from "../../assets/Iconos/email.png";


const allies = [
  {
    icon: Icono1,
    name: "Texto",
  },

  {
    icon: Icono2,
    name: "Texto",
  },

  {
    icon: Icono3,
    name: "Texto",
  },

  {
    icon: Icono4,
    name: "Texto",
  },

];

function AlliesRegEspcial() {
  return (
    <section className="allies-prepaid" id="regimenEsp">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div
          className="allies-prepaid__header"
          style={{ backgroundImage: `url(${heroBg})` }}
        >

          <div className="allies-prepaid__overlay"></div>

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

              <p className="allies-prepaid__subtitle">
                ? entidades aliadas
              </p>

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