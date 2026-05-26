import { Link } from "react-router-dom";

import corazonIcon from "../../assets/Iconos/email.png";
import radiologiaIcon from "../../assets/Iconos/email.png";
import mujerIcon from "../../assets/Iconos/email.png";

function ServicesPreview() {
  const services = [
    {
      id: 1,
      icon: radiologiaIcon,
      title: "Titulo",
      description:
        "Texto",
      link: "/services",
      featured: true,
    },
    {
      id: 2,
      icon: mujerIcon,
      title: "Titulo",
      description:
        "Texto",
      link: "/services",
      featured: false,
    },
    {
      id: 3,
      icon: corazonIcon,
      title: "Titulo",
      description:
        "Texto",
      link: "/services",
      featured: false,
    },
    
    
  ];

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
              className={`services-preview__card ${
                service.featured ? "services-preview__card--featured" : ""
              }`}
            >

              {/* ICONO + TITULO */}
              <div className="services-preview__top">
                <div className="services-preview__icon-box">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="services-preview__icon"
                  />
                </div>

                <h3 className="services-preview__card-title">
                  {service.title.split("\n").map((line, index) => (
                    <span key={index} className="services-preview__card-title-line">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>

              {/* DESCRIPCION */}
              <p className="services-preview__card-description">
                {service.description}
              </p>

              {/* BOTON */}
              <Link
                to={service.link}
                className="services-preview__card-button"
              >
                Ver más
                <span className="services-preview__arrow">→</span>
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;