import heroBg from "../../assets/images/Fondo.jpg";
import integralIcon from "../../assets/Iconos/email.png";
import seguridadIcon from "../../assets/Iconos/email.png";

function PatientSecurityHero() {
  return (
    <section
      className="patient-security-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OVERLAY */}
      <div className="patient-security-hero__overlay"></div>

      <div className="patient-security-hero__container">

        <div className="patient-security-hero__content">

         <h1 className="patient-security-hero__title">
            Políticas de <span className="text-gradient-blue">Seguridad del Paciente</span>
        </h1>

          <p className="patient-security-hero__description">
            Nuestra política institucional garantiza una atención segura,
            humana y de calidad para todos nuestros pacientes y usuarios.
          </p>

            {/* STATS */}
            <div className="patient-security-hero__stats">

            <a
                href="#humanizacion-servicio"
                className="patient-security-hero__stat"
            >
                <img src={integralIcon} alt="Atención Integral" />

                <div>
                <span className="patient-security-hero__label">
                    Atención Integral
                </span>

                <span className="patient-security-hero__desc">
                    Enfoque en el usuario
                </span>
                </div>
            </a>

            <a
                href="#cultura-seguridad"
                className="patient-security-hero__stat"
            >
                <img src={seguridadIcon} alt="Cultura de Seguridad" />

                <div>
                <span className="patient-security-hero__label">
                    Cultura de Seguridad
                </span>

                <span className="patient-security-hero__desc">
                    Justa, educada y no punitiva
                </span>
                </div>
            </a>

            </div>

        </div>

      </div>
    </section>
  );
}

export default PatientSecurityHero;