import { Link, useNavigate } from "react-router-dom";

import corazonIcon from "../../assets/Iconos/email.png";
import radiologiaIcon from "../../assets/Iconos/email.png";
import mujerIcon from "../../assets/Iconos/email.png";
import resonanciaImg from "../../assets/images/Fondo.jpg"; 
import tomografiaImg from "../../assets/images/Fondo.jpg";
import ecografiaImg from "../../assets/images/Fondo.jpg";
import mamografiaImg from "../../assets/images/Fondo.jpg"; 
import radiologiaImg from "../../assets/images/Fondo.jpg";
import dopplerImg from "../../assets/images/Fondo.jpg"; 

function ServicesPreview() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Resonancia Magnética",
      image: resonanciaImg,
      description: "Obtén imágenes detalladas de órganos, tejidos y estructuras internas sin procedimientos invasivos.",
    },
    {
      id: 2,
      title: "Tomografía Computarizada",
      image: tomografiaImg,
      description: "Estudios de alta precisión que permiten diagnósticos rápidos y confiables.",
    },
    {
      id: 3,
      title: "Ecografía",
      image: ecografiaImg,
      description: "Evaluación segura y efectiva para diferentes especialidades médicas.",
    },
    {
      id: 4,
      title: "Mamografía",
      image: mamografiaImg,
      description: "Tecnología especializada para la detección temprana y prevención del cáncer de mama.",
    },
    {
      id: 5,
      title: "Radiología Digital",
      image: radiologiaImg,
      description: "Imágenes diagnósticas con menor tiempo de espera y excelente calidad.",
    },
    {
      id: 6,
      title: "Doppler y Duplex Scanning",
      image: dopplerImg,
      description: "Evaluación vascular avanzada para el análisis del flujo sanguíneo.",
    },
  ];

  const handleCardClick = () => {
    navigate('/services');
  };

  return (
    <section className="services-preview">
      <div className="services-preview__container">

        {/* HEADER */}
        <div className="services-preview__header">
          <h2 className="services-preview__title">
            Nuestros <span>Servicios</span>
          </h2>

          <p className="services-preview__description">
            Ofrecemos un portafolio avanzado en diagnósticos de alta complejidad, 
            combinando la mejor tecnología médica con la atención oportuna que necesitas.
          </p>

          <div className="services-preview__line"></div>

          <div className="services-preview__top-action">
            <Link to="/services" className="services-preview__all-button">
              Ver todos los servicios
              <span className="services-preview__arrow">→</span>
            </Link>
          </div>
        </div>

        {/* GRID */}
        <div className="services-preview__grid">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-card"
              onClick={handleCardClick}
              title="Ver todos los servicios"
            >
              <div className="service-card__image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__image"
                />
                <div className="service-card__overlay">
                  <span className="service-card__overlay-text">Explorar Servicio</span>
                </div>
              </div>

              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <div className="service-card__actions">
                  <a
                    href="https://appcedira.com/solicitarcita/public/solicitud-examen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Agendar cita
                  </a>

                  <Link
                    to="/services"
                    className="btn btn-secondary-outline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;