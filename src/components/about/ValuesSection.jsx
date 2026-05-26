import bgValores from "../../assets/images/Fondo.jpg";

import pasionIcon from "../../assets/Iconos/email.png";
import transparenciaIcon from "../../assets/Iconos/email.png";
import empatiaIcon from "../../assets/Iconos/email.png";
import respetoIcon from "../../assets/Iconos/email.png";

function ValuesSection() {
  return (
    <section
      className="values-section"
      style={{ backgroundImage: `url(${bgValores})` }}
    >
      <div className="values-container">

        <span className="values-badge">
          Lo que nos define
        </span>

        <h2 className="values-title">
          Nuestros <span className="text-gradient-blue">Valores</span>
        </h2>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">
              <img src={pasionIcon} alt="Pasión" />
            </div>
            <h3>Pasión</h3>
            <p>
              Sentimos amor por todo lo que hacemos y entregamos siempre
              lo mejor de nosotros en cada servicio.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={transparenciaIcon} alt="Transparencia" />
            </div>
            <h3>Transparencia</h3>
            <p>
              Nos comunicamos de forma directa y consciente para generar
              credibilidad y confianza con nuestros pacientes.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={empatiaIcon} alt="Empatía" />
            </div>
            <h3>Empatía</h3>
            <p>
              Cultivamos relaciones cercanas y entendemos cómo nuestras
              acciones contribuyen al bienestar de los demás.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={respetoIcon} alt="Respeto" />
            </div>
            <h3>Respeto</h3>
            <p>
              Reconocemos a los demás, valoramos sus aportes y aceptamos
              nuestras diferencias con apertura.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ValuesSection;