import bienestarIcon from "../../assets/Iconos/email.png";
import formacionIcon from "../../assets/Iconos/email.png";
import tecnologiaIcon from "../../assets/Iconos/email.png";
import estabilidadIcon from "../../assets/Iconos/email.png";
import equipoIcon from "../../assets/Iconos/email.png";
import crecimientoIcon from "../../assets/Iconos/email.png";

function CareersBenefits() {
  return (
    <section className="careers-benefits">

      <div className="careers-benefits__container">

        {/* HEADER */}
        <span className="careers-benefits__badge">
          ¿Por qué elegirnos?
        </span>

        <h2 className="careers-benefits__title">
          Beneficios de <span className="text-gradient-blue">trabajar con nosotros</span>
        </h2>

        <p className="careers-benefits__description">
          Más que un empleo, te ofrecemos un proyecto de vida en una organización
          comprometida con el bienestar de sus colaboradores.
        </p>

        {/* GRID */}
        <div className="careers-benefits__grid">

          {/* 1 */}
          <div className="benefit-card benefit-card--blue">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={bienestarIcon} alt="Bienestar" />
              </div>
              <h3>Bienestar Laboral</h3>
            </div>
            <p>
              Contamos con un programa alineado con las necesidades de nuestro(a)s colaboradore(a)s, alianzas comerciales, 
              reconocimientos, convenios de salud, descuentos en procedimientos, horarios flexibles, entre otros
            </p>
          </div>

          {/* 2 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={formacionIcon} alt="Formación" />
              </div>
              <h3>Formación</h3>
            </div>
            <p>
              Contamos con un plan de formación basado en el desarrollo de competencias técnicas y del ser. 
              Capacitaciones que contribuyen a mejorar tu perfil profesional
            </p>
          </div>

          {/* 3 */}
          <div className="benefit-card benefit-card--blue">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={tecnologiaIcon} alt="Tecnología" />
              </div>
              <h3>Tecnología de Punta</h3>
            </div>
            <p>
              Trabaja con equipos de última generación en imágenes diagnósticas,
              resonancia y cardiología.
            </p>
          </div>

          {/* 4 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={estabilidadIcon} alt="Estabilidad" />
              </div>
              <h3>Estabilidad Laboral</h3>
            </div>
            <p>
              Brindamos una contratación directa con la compañía con todas las garantías de ley, con un ambiente 
              óptimo para trabajar evaluados por nuestro(a)s colaboradore(a)s en un 90% de satisfacción
            </p>
          </div>

          {/* 5 */}
          <div className="benefit-card benefit-card--blue">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={equipoIcon} alt="Equipo" />
              </div>
              <h3>Equipo Humano</h3>
            </div>
            <p>
              Contamos con un equipo de profesionales altamente calificado, comprometido y empático
            </p>
          </div>

          {/* 6 */}
          <div className="benefit-card">
            <div className="benefit-card__header">
              <div className="benefit-card__icon">
                <img src={crecimientoIcon} alt="Crecimiento" />
              </div>
              <h3>Crecimiento Profesional</h3>
            </div>
            <p>
              Planes de carrera y oportunidades de ascenso 
              dentro de las compañias Radiólogos Asociados, Cedicaf y Diaxme
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CareersBenefits;