import eficienciaIcon from "../../assets/Iconos/email.png";
import servicioIcon from "../../assets/Iconos/email.png";
import igualdadIcon from "../../assets/Iconos/email.png";
import compromisoIcon from "../../assets/Iconos/email.png";
import equipoIcon from "../../assets/Iconos/email.png";

function PrinciplesSection() {
  return (
    <section className="principles">

      <div className="principles__container">

        {/* HEADER */}
        <h2 className="principles__title">
          Principios <span className="text-gradient-blue">Corporativos</span>
        </h2>

        <div className="section-line-blue principles__line"></div>

        {/* GRID */}
        <div className="principles__grid">

          {/* CARD */}
          <div className="principle-card">
            <div className="principle-card__icon">
              <img src={eficienciaIcon} alt="Eficiencia" />
            </div>
            <h3>Eficiencia y confiabilidad</h3>
            <p>
              Aprovechamos nuestros recursos de la mejor manera para obtener
              resultados de calidad, optimizamos procesos y garantizamos la
              seguridad de las personas.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-card__icon">
              <img src={servicioIcon} alt="Servicio" />
            </div>
            <h3>Actitud de Servicio</h3>
            <p>
              Contamos con una actitud asertiva para brindar soluciones,
              reconociendo la importancia de nuestros clientes internos y externos.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-card__icon">
              <img src={igualdadIcon} alt="Igualdad" className="icon-lg" />
            </div>
            <h3>Igualdad e inclusión</h3>
            <p>
              Trabajamos con todas las personas de la compañía, aceptamos las
              diferencias y valoramos la autenticidad de cada individuo.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-card__icon">
              <img src={compromisoIcon} alt="Compromiso" />
            </div>
            <h3>Compromiso y responsabilidad</h3>
            <p>
              Estamos comprometidos con la compañía y entendemos el impacto de
              nuestras acciones en el logro de resultados y crecimiento continuo.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-card__icon">
              <img src={equipoIcon} alt="Equipo" />
            </div>
            <h3>Trabajo en equipo</h3>
            <p>
              Somos parte de un todo, por eso el apoyo entre compañeros es clave
              para alcanzar nuestros objetivos comunes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PrinciplesSection;