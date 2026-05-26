import capacitacionIcon from "../../assets/Iconos/email.png";
import controlIcon from "../../assets/Iconos/email.png";
import estrategiaIcon from "../../assets/Iconos/email.png";
import participacionIcon from "../../assets/Iconos/email.png";
import promocionIcon from "../../assets/Iconos/email.png";

const axes = [
  {
    title: "Capacitación y Formación",
    icon: capacitacionIcon,
    activities: 4,
    items: [
      "Ejecutar el plan de capacitación al personal del sector sobre actividades orientadas a la socialización y discusión de la política pública.",
      "Ejecutar plan de capacitación módulo salud pública.",
      "Ejecutar programa para la formación de formadores usuarios de asociación en temas de salud pública.",
      "Ejecutar actividad de formación temática control social dirigida a funcionarios de la organización."
    ]
  },

  {
    title: "Educación en Control Social",
    icon: controlIcon,
    activities: 4,
    items: [
      "Gestionar capacitaciones para la comunidad en tema control social.",
      "Desarrollar módulo de capacitaciones sobre uso de las TIC para la comunidad en general.",
      "Desarrollar módulo control social del plan de capacitación dirigido a la comunidad en general.",
      "Gestionar programa de reconocimiento control social para miembros de la asociación."
    ]
  },

  {
    title: "Estrategia Pedagógica y Enfoque Diferencial",
    icon: estrategiaIcon,
    activities: 4,
    items: [
      "Ejecutar programa de acciones para la incorporación del enfoque diferencial.",
      "Ejecución de la estrategia pedagógica y plan de capacitación.",
      "Implementar plan de comunicaciones dirigido a usuarios.",
      "Ejecutar actividades para la información de canales de comunicación."
    ]
  },

  {
    title: "Participación Social e Incentivos",
    icon: participacionIcon,
    activities: 4,
    items: [
      "Ejecutar el plan de incentivos para fortalecer la participación social.",
      "Ejecutar cronograma de convocatorias y veedurías.",
      "Incluir espacios para participación ciudadana.",
      "Ejecutar espacios de formulación y participación comunitaria."
    ]
  },

  {
    title: "Promoción, Prevención y Rendición de Cuentas",
    icon: promocionIcon,
    activities: 4,
    items: [
      "Ejecutar módulo bienestar y salud.",
      "Ejecución de campañas de promoción y prevención.",
      "Gestionar reuniones de rendición de cuentas.",
      "Ejecutar programa de comunicación territorial."
    ]
  }
];

function PpssAxes() {
  return (
    <section className="ppss-axes">

      <div className="ppss-axes__container">

        {/* HEADER */}
        <div className="ppss-axes__header">

          <span className="section-line-blue"></span>

          <h2 className="ppss-axes__title">
            Ejes de la{" "}
            <span className="text-gradient-blue">
              Política Pública
            </span>
          </h2>

          <p className="ppss-axes__description">
            La Política Pública de Salud y Seguridad Social establece los
            lineamientos y estrategias para garantizar la participación
            ciudadana, el control social y la rendición de cuentas en el
            sector salud.
          </p>

        </div>

        {/* GRID */}
        <div className="ppss-axes__grid">

          {axes.map((axis, index) => (
            <div className="ppss-axes__card" key={index}>

              {/* ICON */}
              <div className="ppss-axes__icon">
                <img src={axis.icon} alt={axis.title} />
              </div>

              {/* TITLE */}
              <h3 className="ppss-axes__card-title">
                {axis.title}
              </h3>

              {/* LIST */}
              <ul className="ppss-axes__list">

                {axis.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default PpssAxes;