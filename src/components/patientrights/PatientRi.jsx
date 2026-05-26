// ICONOS
import icon1 from "../../assets/Iconos/email.png";
import icon2 from "../../assets/Iconos/email.png";
import icon3 from "../../assets/Iconos/email.png";
import icon4 from "../../assets/Iconos/email.png";
import icon5 from "../../assets/Iconos/email.png";
import icon6 from "../../assets/Iconos/email.png";
import icon7 from "../../assets/Iconos/email.png";
import icon8 from "../../assets/Iconos/email.png";
import icon9 from "../../assets/Iconos/email.png";
import icon10 from "../../assets/Iconos/email.png";
import icon11 from "../../assets/Iconos/email.png";
import icon12 from "../../assets/Iconos/email.png";
import icon13 from "../../assets/Iconos/email.png";
import icon14 from "../../assets/Iconos/email.png";

const rights = [
  {
    icon: icon1,
    title: "Acceso a servicios de salud",
    desc: "A acceder a los servicios y tecnologías de salud, que le garanticen una atención integral, oportuna y de alta calidad."
  },
  {
    icon: icon2,
    title: "Comunicación clara",
    desc: "A mantener una comunicación plena, permanente, expresa y clara con el profesional de la salud tratante."
  },
  {
    icon: icon3,
    title: "Información para decidir",
    desc: "Recibir información clara y suficiente del profesional de salud para tomar decisiones libres e informadas sobre los procedimientos y sus riesgos. Ninguna persona puede ser obligada a recibir tratamiento en contra de su voluntad."
  },
  {
    icon: icon4,
    title: "Prestaciones legales",
    desc: "A recibir prestaciones de salud en las condiciones y términos consagrados en la ley."
  },
  {
    icon: icon5,
    title: "Trato digno",
    desc: "A recibir un trato digno, respetando sus creencias y costumbres, así como las opiniones personales que tengan sobre los procedimientos."
  },
  {
    icon: icon6,
    title: "Confidencialidad clínica",
    desc: "A que la historia clínica sea confidencial y solo accesible con autorización del paciente o por ley, y poder consultarla gratuitamente y obtener copia de la misma."
  },
  {
    icon: icon7,
    title: "Atención de calidad",
    desc: "A que se le preste durante todo el proceso de la enfermedad, asistencia de calidad por trabajadores de la salud debidamente capacitados y autorizados para ejercer."
  },
  {
    icon: icon8,
    title: "Acceso a tecnologías y medicamentos",
    desc: "A la provisión y acceso oportuno a las tecnologías y a los medicamentos requeridos."
  },
  {
    icon: icon9,
    title: "Condiciones seguras",
    desc: "A recibir los servicios de salud en condiciones de higiene, seguridad y respeto a su intimidad."
  },
  {
    icon: icon10,
    title: "Derecho a la intimidad",
    desc: "A la intimidad se garantiza la confidencialidad de la información en salud y de las condiciones del paciente, salvo acceso por familiares o autoridades en los casos autorizados por la ley."
  },
  {
    icon: icon11,
    title: "Canales de comunicación",
    desc: "A recibir información sobre los canales para presentar reclamaciones, quejas y sugerencias ante la institución, y a obtener respuesta por escrito."
  },
  {
    icon: icon12,
    title: "Transparencia de costos",
    desc: "A solicitar y recibir explicaciones o rendición de cuentas acerca de los costos por los tratamientos de salud recibidos."
  },
  {
    icon: icon13,
    title: "No al trato inhumano",
    desc: "A no ser sometido en ningún caso a tratos crueles o inhumanos que afecten su dignidad, ni a ser obligados a soportar sufrimiento evitable, ni obligados a padecer enfermedades que pueden recibir tratamiento."
  },
  {
    icon: icon14,
    title: "Sin cargas administrativas",
    desc: "A que no se trasladen las cargas administrativas y burocráticas que les corresponde asumir a los encargados o intervinientes en la prestación del servicio."
  }
];

function PatientRi() {
  return (
    <section className="patient-rights" id="derechos">
      <div className="patient-rights__container">

        {/* HEADER */}
        <div className="patient-rights__header">
          <span className="patient-rights__badge">
            Dando cumplimiento a la Ley 1751 del 2015
          </span>

          <h2 className="patient-rights__title">
            Derechos de los <span className="text-gradient-blue">Pacientes</span>
          </h2>

          <p className="patient-rights__description">
            Adoptamos y nos comprometemos a cumplir los siguientes derechos de los pacientes:
          </p>
        </div>

        {/* GRID */}
        <div className="patient-rights__grid">
          {rights.map((item, index) => (
            <div className="patient-rights__card" key={index}>

              <div className="patient-rights__icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <div className="patient-rights__content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PatientRi;