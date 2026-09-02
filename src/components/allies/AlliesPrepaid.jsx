import medicinaIcon from "../../assets/Iconos/cirujano.png";

// ICONOS CARDS
import Med1 from "../../assets/images/LogoAxaColpatria.webp";
import Med2 from "../../assets/images/LogoColmedica.webp";
import Med3 from "../../assets/images/LogoColsanitas.webp";
import Med4 from "../../assets/images/LogoCoomeva.webp";
import Med5 from "../../assets/images/LogoMedisanitas.webp";
import Med6 from "../../assets/images/LogoMedPlus.webp";



const allies = [
    { id: 11, name: "Axa Colpatria Medicina Prepagada", icon: Med1 },
    { id: 12, name: "Colmedica Medicina Prepagada", icon: Med2 },
    { id: 13, name: "Colsanitas Integral", icon: Med3 },
    { id: 14, name: "Coomeva Medicina Prepagada S.A", icon: Med4 },
    { id: 15, name: "Medisanitas", icon: Med5 },
    { id: 16, name: "MedPlus Medicina Prepagada", icon: Med6 },

];

function AlliesPrepaid() {
  return (
    <section className="allies-prepaid" id="medicinaprepagada">

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
                Medicina Prepagada
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

export default AlliesPrepaid;