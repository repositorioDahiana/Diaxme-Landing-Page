import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

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


function ServicesPreview() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 1;
        
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft < 350) {
        carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2 - 350) {
        carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="services-preview">
      <div className="services-preview__container">

        {/* HEADER DE DIAXME */}
        <div className="services-preview__header">
          <h2 className="services-preview__title">
            Nuestros <span>Servicios</span>
          </h2>
          <p className="services-preview__description">
            En DIAXME ponemos a tu disposición tecnología de vanguardia, atención humana y especialistas 
            altamente capacitados para ofrecer diagnósticos confiables, rápidos y seguros, cuidando siempre 
            tu bienestar y tranquilidad.
          </p>
          <div className="section-line-brand services-preview__line"></div>

          <div className="services-preview__top-action">
            <Link to="/services" className="services-preview__all-button">
              Ver todos los servicios
              <span className="services-preview__arrow">→</span>
            </Link>
          </div>
        </div>

        {/* CARRUSEL */}
        <div 
          className="services-preview__carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="services-preview__arrow-btn left" onClick={scrollLeftBtn} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="services-preview__carousel-wrapper" ref={carouselRef}>
            <div className="services-preview__carousel">
            
              {duplicatedServices.map((service, index) => (
                <article
                  key={`${service.id}-${index}`}
                  className="services-preview__card"
                >
                  <div
                    className="services-preview__card-bg"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  ></div>

                  <div className="services-preview__card-overlay"></div>

                  <div className="services-preview__card-body">
                    <div className="services-preview__top">
                      <div className={`services-preview__icon-box ${service.id === 3 ? 'services-preview__icon-box--large' : ''}`}>
                        <img
                          src={service.icon}
                          alt={service.title}
                          className={`services-preview__icon ${service.id === 3 ? 'services-preview__icon--large' : ''}`}
                        />
                      </div>

                      <h3 className="services-preview__card-title">
                        {service.title}
                      </h3>
                    </div>

                    <p className="services-preview__card-description">
                      {service.description}
                    </p>

                    <Link to={service.link} className="services-preview__card-button">
                      Ver más
                      <span className="services-preview__arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}

            </div>
          </div>

          <button className="services-preview__arrow-btn right" onClick={scrollRightBtn} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;