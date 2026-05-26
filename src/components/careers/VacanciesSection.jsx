import React from "react";
import agenteIcon from "../../assets/Iconos/email.png";
import atencionIcon from "../../assets/Iconos/email.png";
import laboratorioIcon from "../../assets/Iconos/email.png";
import cientificoIcon from "../../assets/Iconos/email.png";
import {
  MapPin,
  Clock3,
  BriefcaseBusiness,
  PhoneCall,
  CircleCheck,
} from "lucide-react";

function VacanciesSection() {
  return (
    <section className="vacancies" id="vacantes">
      <div className="vacancies__container">

        {/* HEADER */}
        <span className="vacancies__badge">
          Oportunidades disponibles
        </span>

        <h2 className="vacancies__title">
          Nuestras <span className="text-gradient-blue">Vacantes</span>
        </h2>

        {/* GRID */}
        <div className="vacancies__grid">

          {/* CARD 1: AGENTE CALL CENTER */}
          <div className="vacancy-card">
            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={agenteIcon} alt="Agente Call Center" />
              </div>

              <div className="vacancy-card__header-info">
                <h3>Agente Call Center</h3>
                <span className="vacancy-card__city">
                  <MapPin size={15} />
                  Pereira
                </span>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <PhoneCall size={16} />
                <span>Objetivo del cargo</span>
              </div>

              <p className="vacancy-card__description">
                Brindar una atención telefónica ágil, cordial y eficiente a pacientes
                particulares y remitidos por diferentes entidades, gestionando de manera
                oportuna el agendamiento de citas y garantizando una experiencia de
                servicio alineada con los estándares de calidad de la compañía.
              </p>
            </div>

            {/* PERFIL */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <BriefcaseBusiness size={16} />
                <span>Perfil requerido</span>
              </div>

              <ul className="vacancy-card__list">
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Bachiller, técnico o tecnólogo en servicio al cliente
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Excelente comunicación verbal y orientación al usuario
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Capacidad para gestionar agendas y citas médicas
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Disponibilidad para turnos rotativos diurnos
                  </span>
                </li>
              </ul>
            </div>

            {/* FOOTER */}
            <div className="vacancy-card__footer">
              <div className="vacancy-card__schedule">
                <Clock3 size={16} />
                <span>
                  Lunes a sábado · Turnos rotativos diurnos
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: ASESOR INTEGRAL DE EXPERIENCIA AL USUARIO */}
          <div className="vacancy-card">
            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={atencionIcon} alt="Asesor(a) Integral de Experiencia al Usuario" />
              </div>

              <div className="vacancy-card__header-info">
                <h3>Asesor(a) Integral de Experiencia al Usuario</h3>
                <span className="vacancy-card__city" title="Pereira, Armenia, Cartago, Tuluá, Villavicencio e Ibagué">
                  <MapPin size={15} />
                  En Todas Nuestras Sedes
                </span>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <PhoneCall size={16} />
                <span>Objetivo del cargo</span>
              </div>

              <p className="vacancy-card__description">
                Brindar una atención integral y oportuna a los(as) pacientes durante su proceso de ingreso 
                al área asistencial, garantizando el correcto registro, facturación y envío de la 
                documentación requerida para la radicación de cuentas y el adecuado manejo de caja, 
                contribuyendo a una experiencia de servicio eficiente y de calidad.
              </p>
            </div>

            {/* PERFIL */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <BriefcaseBusiness size={16} />
                <span>Perfil requerido</span>
              </div>

              <ul className="vacancy-card__list">
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Bachiller, técnico o tecnólogo en administración en salud
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Conocimiento en procesos de registro, facturación y radicación de cuentas
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Capacidad para el adecuado manejo de caja, valores y control de ingresos
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Alta orientación al detalle y excelencia en el servicio al paciente
                  </span>
                </li>
              </ul>
            </div>

            {/* FOOTER */}
            <div className="vacancy-card__footer">
              <div className="vacancy-card__schedule">
                <Clock3 size={16} />
                <span>
                  Turnos rotativos · Disponibilidad nocturna, fines de semana y festivos
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3: TECNÓLOGO EN IMÁGENES DIAGNÓSTICAS */}
          <div className="vacancy-card">
            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={cientificoIcon} alt="Tecnólogo(a) en Imágenes Diagnósticas" />
              </div>

              <div className="vacancy-card__header-info">
                <h3>Tecnólogo(a) en Imágenes Diagnósticas</h3>
                <span className="vacancy-card__city" title="Pereira, Armenia, Cartago, Tuluá, Villavicencio e Ibagué">
                  <MapPin size={15} />
                  Múltiples Sedes
                </span>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <PhoneCall size={16} />
                <span>Objetivo del cargo</span>
              </div>

              <p className="vacancy-card__description">
                Realizar estudios de imágenes diagnósticas garantizando la calidad, oportunidad 
                y cumplimiento de los protocolos establecidos para una adecuada atención y 
                seguridad del paciente.
              </p>
            </div>

            {/* PERFIL Y REQUISITOS */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <BriefcaseBusiness size={16} />
                <span>Perfil y Requisitos</span>
              </div>

              <ul className="vacancy-card__list">
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Tecnólogo(a) en Imágenes Diagnósticas graduado
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Inscripción vigente en el ReTHUS
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Curso de Protección Radiológica vigente
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Curso de Soporte Vital Básico (RCP) actualizado
                  </span>
                </li>
              </ul>
            </div>

            {/* FOOTER */}
            <div className="vacancy-card__footer">
              <div className="vacancy-card__schedule">
                <Clock3 size={16} />
                <span>
                  Turnos rotativos · Disponibilidad nocturna, fines de semana y festivos
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4: AUXILIAR DE ENFERMERÍA */}
          <div className="vacancy-card">
            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={laboratorioIcon} alt="Auxiliar de Enfermería" />
              </div>

              <div className="vacancy-card__header-info">
                <h3>Auxiliar de Enfermería</h3>
                <span className="vacancy-card__city" title="Pereira, Armenia, Cartago, Tuluá, Villavicencio e Ibagué">
                  <MapPin size={15} />
                  Múltiples Sedes
                </span>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <PhoneCall size={16} />
                <span>Objetivo del cargo</span>
              </div>

              <p className="vacancy-card__description">
                Brindar atención y apoyo integral a los(as) pacientes durante su permanencia en el servicio, 
                garantizando el cumplimiento de los protocolos asistenciales, la adecuada preparación y 
                administración de medicamentos, así como el bienestar y confort de las instalaciones.
              </p>
            </div>

            {/* PERFIL Y REQUISITOS */}
            <div className="vacancy-card__section">
              <div className="vacancy-card__tag">
                <BriefcaseBusiness size={16} />
                <span>Perfil y Requisitos</span>
              </div>

              <ul className="vacancy-card__list">
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Técnico(a) en Auxiliar de Enfermería graduado
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Inscripción activa en el ReTHUS
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Curso de Atención a Víctimas de Violencia Sexual
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Curso de Soporte Vital Básico (RCP) vigente
                  </span>
                </li>
                <li>
                  <CircleCheck size={16} />
                  <span>
                    Curso de Toma de Muestras de Laboratorio
                  </span>
                </li>
              </ul>
            </div>

            {/* FOOTER */}
            <div className="vacancy-card__footer">
              <div className="vacancy-card__schedule">
                <Clock3 size={16} />
                <span>
                  Turnos rotativos · Disponibilidad nocturna, fines de semana y festivos
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA (LLAMADO A LA ACCIÓN) */}
        <div className="vacancies__cta">
          <p>¿No encuentras tu área? Envíanos tu hoja de vida de todas formas.</p>
          <a href="#postular" className="btn-base btn-primary-blue">
            Postularme ahora
          </a>
        </div>

      </div>
    </section>
  );
}

export default VacanciesSection;