import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/email.png";

// ICONOS CARDS
import Icono1 from "../../assets/Iconos/email.png";
import Icono2 from "../../assets/Iconos/email.png";


const allies = [
  {
      icon: Icono1,
      name: "Texto",
    },
  
    {
      icon: Icono2,
      name: "Texto",
    },
];

function AlliesCaja() {
  return (
    <section className="allies-prepaid" id="caja">

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
                Cajas de Compensación
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

export default AlliesCaja;