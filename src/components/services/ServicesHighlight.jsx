import React from "react";
import ServiceImag1 from "../../assets/images/Ferrari1.jpg";
import ServiceImag2 from "../../assets/images/Ferrari2.jpg";
import ServiceImag3 from "../../assets/images/Ferrari3.png";
import ServiceImag4 from "../../assets/images/Ferrari4.png";
import ServiceImag5 from "../../assets/images/Ferrari5.png";
import ServiceImag6 from "../../assets/images/Ferrari6.png";
import ServiceImag7 from "../../assets/images/Ferrari7.png";
import ServiceImag8 from "../../assets/images/Ferrari8.jpg";
import ServiceImag9 from "../../assets/images/Ferrari9.jpg";
import ServiceImag10 from "../../assets/images/Ferrari10.webp";

import Service1Icon from "../../assets/Iconos/Ferrari1.png";
import Service2Icon from "../../assets/Iconos/Ferrari2.png";
import Service3Icon from "../../assets/Iconos/Ferrari3.png";
import Service4Icon from "../../assets/Iconos/Ferrari4.png";
import Service5Icon from "../../assets/Iconos/Ferrari5.png";
import Service6Icon from "../../assets/Iconos/Ferrari6.png";
import Service7Icon from "../../assets/Iconos/Ferrari7.png";
import Service8Icon from "../../assets/Iconos/Ferrari8.png";
import Service9Icon from "../../assets/Iconos/Ferrari9.png";
import Service10Icon from "../../assets/Iconos/Ferrari10.png";

const services = [
  {
    id: 1,
    title: "Resonancia Magnética Nuclear Especializada",
    bgImage: ServiceImag1,
    icon: Service1Icon,
    description: "Estudios de alta complejidad para casos específicos (cardiacos, vasculares, multiparamétricos). Tecnología avanzada de última generación para obtener diagnósticos de máxima precisión.",
    link: "/services",
  },
  {
    id: 2,
    title: "Resonancia Magnética Convencional",
    bgImage: ServiceImag2,
    icon: Service2Icon,
    description: "Evaluaciones de rutina rápidas y precisas para cerebro, columna y articulaciones. Un estudio indoloro y sin radiación para un diagnóstico oportuno.",
    link: "/services",
  },
  {
    id: 4,
    title: "Tomografía Computarizada Especializada y Convencional",
    bgImage: ServiceImag3,
    icon: Service3Icon,
    description: "Tecnología avanzada para detectar y evaluar múltiples condiciones médicas con rapidez y exactitud.",
    link: "/services",
  },
  {
    id: 5,
    title: "Ecografía",
    bgImage: ServiceImag4,
    icon: Service4Icon,
    description: "Estudios por ultrasonido realizados con equipos modernos para una valoración segura, cómoda y en tiempo real.",
    link: "/services",
  },
  {
    id: 6,
    title: "Doppler y Duplex Scanning Vasos a Color",
    bgImage: ServiceImag5,
    icon: Service5Icon,
    description: "Visualización avanzada de arterias y venas que permite diagnósticos vasculares más precisos. Evaluación especializada del flujo sanguíneo y la salud vascular mediante imágenes de alta definición.",
    link: "/services",
  },
  {
    id: 7,
    title: "Mamografía",
    bgImage: ServiceImag6,
    icon: Service6Icon,
    description: "Diagnóstico preventivo y oportuno para el cuidado integral de la salud femenina.",
    link: "/services",
  },
  {
    id: 8,
    title: "Radiología Convencional Digitalizada",
    bgImage: ServiceImag7,
    icon: Service7Icon,
    description: "Radiografías digitales con excelente calidad de imagen y resultados ágiles para una atención eficiente.",
    link: "/services",
  },
  {
    id: 9,
    title: "Radiografía Panorámica de Columna (Goniometría u Ortograma)",
    bgImage: ServiceImag8,
    icon: Service8Icon,
    description: "Estudios especializados para evaluar postura, alineación y estructuras óseas de manera integral.",
    link: "/services",
  },
  {
    id: 10,
    title: "Colposcopia",
    bgImage: ServiceImag9,
    icon: Service9Icon,
    description: "Procedimiento especializado para la prevención, evaluación y diagnóstico ginecológico.",
    link: "/services",
  },
  {
    id: 11,
    title: "Sedación",
    bgImage: ServiceImag10,
    icon: Service10Icon,
    description: "Mayor comodidad y tranquilidad durante los procedimientos, bajo supervisión profesional y segura.",
    link: "/services",
  },
];

function ServicesHighlight() {
  return (
    <section className="services-highlight" id="servicios">
      <div className="services-highlight__container">

        {/* HEADER */}
        <div className="services-highlight__header">
          <h2 className="services-highlight__title">
            Estudios <span className="text-gradient-blue">Especializados</span>
          </h2>

          <p className="services-highlight__description">
            Tecnología de avanzada e imágenes de alta definición al servicio de tu salud. Diagnósticos certeros, rápidos y sin complicaciones.
          </p>
        </div>

        {/* GRID */}
        <div className="services-highlight__grid">
          {services.map((item, index) => (
            <article
              key={item.id}
              className="service-card-flip"
            >
              <div className="service-card-flip__inner">

                {/* FRONT */}
                <div
                  className={`service-card service-card--front ${
                    index % 2 === 0 ? "service-card--blue" : ""
                  }`}
                >
                  <div className="service-card__icon">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      loading="eager" 
                      decoding="async" 
                      width="64"
                      height="64"
                    />
                  </div>

                  <div className="service-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="service-card service-card--back">
                  <img 
                    src={item.bgImage} 
                    alt={item.title} 
                    loading="lazy" 
                    decoding="async"
                  />
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="services-hero__actions">
          <a href="#especialidad" className="btn-base btn-primary-brand">
            Ver más servicios
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesHighlight;