import medicinaIcon from "../../assets/Iconos/ciudad.png";

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


const allies = [
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

function AlliesConEmp() {
  return (
    <section className="allies-prepaid" id="convenioempre">

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
                Convenio Empresas
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

export default AlliesConEmp;