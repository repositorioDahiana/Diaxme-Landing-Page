import duty1 from "../../assets/Iconos/email.png";
import duty2 from "../../assets/Iconos/email.png";
import duty3 from "../../assets/Iconos/email.png";
import duty4 from "../../assets/Iconos/email.png";
import duty5 from "../../assets/Iconos/email.png";
import duty6 from "../../assets/Iconos/email.png";
import duty7 from "../../assets/Iconos/email.png";
import duty8 from "../../assets/Iconos/email.png";
import duty9 from "../../assets/Iconos/email.png";

const duties = [
  {
    icon: duty1,
    text: "Propender por su autocuidado, el de su familia y el de su comunidad.",
  },
  {
    icon: duty2,
    text: "Atender oportunamente las recomendaciones en programas de promoción y prevención.",
  },
  {
    icon: duty3,
    text: "Actuar de manera solidaria ante situaciones que pongan en riesgo la vida o la salud.",
  },
  {
    icon: duty4,
    text: "Respetar al personal responsable de la prestación y administración de los servicios de salud.",
  },
  {
    icon: duty5,
    text: "Usar de forma adecuada y racional los servicios y recursos del sistema de salud.",
  },
  {
    icon: duty6,
    text: "Cumplir las normas establecidas por el sistema de salud.",
  },
  {
    icon: duty7,
    text: "Actuar de buena fe frente al sistema de salud.",
  },
  {
    icon: duty8,
    text: "Suministrar información oportuna, clara y suficiente para la atención.",
  },
  {
    icon: duty9,
    text: "Contribuir solidariamente al financiamiento del sistema según su capacidad.",
  },
];

function PatientDuties() {
  return (
    <section className="patient-duties" id="deberes">
      <div className="patient-duties__container">
        <h2 className="patient-duties__title">
          Deberes de los <span className="text-gradient-blue">Pacientes</span>
        </h2>

        <p className="patient-duties__description">
          De acuerdo con la normativa vigente en Colombia, estos son los deberes
          que debes cumplir como usuario del sistema de salud.
        </p>

        <div className="patient-duties__grid">
          {duties.map((item, index) => (
            <div key={index} className="patient-duties__item">
              <div className="patient-duties__icon">
                <img src={item.icon} alt="Deber" />
              </div>

              <p className="patient-duties__text">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PatientDuties;