import historia1 from "../../assets/images/Fondo.jpg";
import historia2 from "../../assets/images/Fondo.jpg";
import historia3 from "../../assets/images/Fondo.jpg";
import historia4 from "../../assets/images/Fondo.jpg";

function HistoryTimeline() {
  return (
    <section className="history">

      <div className="history__container">
        <h2 className="history__title">
          Reseña <span className="text-gradient-blue">Histórica</span>
        </h2>

        <div className="section-line-blue history__line"></div>

        <div className="history__timeline">

          {/* 2014 */}
          <div className="history__item">
            <div className="history__content">
              <span className="history__year">2014</span>
              <h3>DIAXME llega a Villavicencio</h3>
              <p>
                Se crea DIAXME, integrando servicios de tomografía, resonancia magnética,
                rayos X y ecografía, fortaleciendo la atención integral en el centro occidente del país.
              </p>
            </div>

            <div className="history__image">
              <img src={historia3} alt="DIAXME" />
            </div>
          </div>

          {/* ACTUALIDAD */}
          <div className="history__item history__item--reverse">
            <div className="history__content">
              <span className="history__year">Hoy</span>
              <h3>Presencia Nacional y Medicina Nuclear</h3>
              <p>
                Contamos con presencia en Pereira, Armenia, Tuluá, Cartago, Ibagué y
                Villavicencio. Somos pioneros en medicina nuclear en Ibagué y referentes
                a nivel nacional en diagnóstico especializado, ofreciendo respaldo, experiencia
                y confianza en cada resultado.
              </p>
            </div>

            <div className="history__image">
              <img src={historia4} alt="Actualidad" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HistoryTimeline;