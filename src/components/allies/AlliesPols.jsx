import medicinaIcon from "../../assets/Iconos/contrato.png";

import poliza1 from "../../assets/images/LogoEquidadSeguros.webp";
import poliza2 from "../../assets/images/LogoSeguros.webp";
import poliza3 from "../../assets/images/LogoBMI.webp";


const allies = [
  { id: 8, name: "La Equidad Seguros De Vidad O.C", icon: poliza1 },
  { id: 9, name: "Compañia Mundial De Seguros S.A.", icon: poliza2 },
  { id: 10, name: "BMI Colombia Compañia De Seguros De Vida S.A", icon: poliza3 }

 
];

function AlliesPols() {
  return (
    <section className="allies-prepaid" id="polizas">

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
                Pólizas de Salud
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

export default AlliesPols;