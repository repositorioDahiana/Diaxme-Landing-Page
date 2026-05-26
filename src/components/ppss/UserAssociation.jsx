import React from "react";
import representarIcon from "../../assets/Iconos/email.png";
import calidadIcon from "../../assets/Iconos/email.png";
import controlIcon from "../../assets/Iconos/email.png";
import comunicacionIcon from "../../assets/Iconos/email.png";
import mejoraIcon from "../../assets/Iconos/email.png";
import derechosIcon from "../../assets/Iconos/email.png";
import asociacionIcon from "../../assets/Iconos/email.png";

const functions = [
  {
    icon: representarIcon,
    title: "Representar intereses",
    description:
      "Velar por los derechos e intereses de los usuarios del servicio de salud, siendo su voz dentro de la organización.",
  },
  {
    icon: calidadIcon,
    title: "Vigilar la calidad",
    description:
      "Supervisar la calidad de la atención, el cumplimiento de normas y la satisfacción de los pacientes.",
  },
  {
    icon: controlIcon,
    title: "Promover control social",
    description:
      "Fomentar mecanismos de participación ciudadana para el control y vigilancia de los servicios de salud.",
  },
  {
    icon: comunicacionIcon,
    title: "Facilitar comunicación",
    description:
      "Servir como canal de diálogo entre los usuarios, la institución y las entidades territoriales de salud.",
  },
  {
    icon: mejoraIcon,
    title: "Mejoramiento continuo",
    description:
      "Contribuir con propuestas y sugerencias para el mejoramiento de los procesos y la seguridad del paciente.",
  },
  {
    icon: derechosIcon,
    title: "Garantizar derechos",
    description:
      "Asegurar que todos los pacientes reciban un trato digno, respetuoso y con enfoque humanizado.",
  },
];

function UserAssociation() {
  return (
    <section className="user-association" id="asociacion">
      <div className="user-association__container">

        {/* HEADER */}
        <div className="user-association__header">
          <span className="section-line-blue"></span>
          <h2 className="user-association__title">
            ¿Qué es la{" "}
            <span className="text-gradient-blue">
              Asociación de Usuarios?
            </span>
          </h2>
          <p className="user-association__description">
            Es un espacio de participación ciudadana donde los pacientes,
            usuarios y sus familias ejercen activamente su derecho a la
            participación en salud.
          </p>
        </div>

        {/* GRID */}
        <div className="user-association__grid">
          {functions.map((item, index) => (
            <div className="user-association__card" key={index}>
              
              {/* Contenedor alineado: Icono a la izquierda, título a la derecha */}
              <div className="user-association__icon-wrapper">
                <div className="user-association__icon-small">
                  <img src={item.icon} alt={item.title} />
                </div>
                
                <h3 className="user-association__card-title">
                  {item.title}
                </h3>
              </div>

              <p className="user-association__card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO */}
        <div className="user-association__bottom">
          {/* LEFT */}
          <div className="user-association__content">
            <h3>¿Cómo participar?</h3>
            <p>
              Puedes ser parte de la Asociación de Usuarios asistiendo a
              las asambleas, inscribiéndote como miembro activo,
              participando en las veedurías ciudadanas y presentando tus
              peticiones, quejas o sugerencias a través de nuestro canal
              PQRS.
            </p>

            <div className="user-association__tags">
              <span>Asambleas periódicas</span>
              <span>Veedurías ciudadanas</span>
              <span>Inscripción libre</span>
            </div>
          </div>

          {/* RIGHT ICON */}
          <div className="user-association__icon">
            <img
              src={asociacionIcon}
              alt="Asociación de Usuarios"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default UserAssociation;