import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import corazonIcon from "../../assets/Iconos/email.png";
import radiologiaIcon from "../../assets/Iconos/email.png";
import mujerIcon from "../../assets/Iconos/email.png";
import resonanciaImg from "../../assets/images/Fondo.jpg"; 
import tomografiaImg from "../../assets/images/Fondo.jpg";
import ecografiaImg from "../../assets/images/Fondo.jpg";
import mamografiaImg from "../../assets/images/Fondo.jpg"; 
import radiologiaImg from "../../assets/images/Fondo.jpg";
import dopplerImg from "../../assets/images/Fondo.jpg"; 

import fondoImg from "../../assets/images/Fondo.jpg";
import emailIcon from "../../assets/Iconos/email.png";

function ServicesPreview() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Array estructurado con tus servicios reales
  const services = [
    {
      id: 1,
      title: "Resonancia Magnética Nuclear Especializada y Convencional",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Estudios de alta precisión que permiten obtener imágenes detalladas del cuerpo para diagnósticos más seguros y oportunos.",
      link: "/services",
    },
    {
      id: 2,
      title: "Tomografía Computarizada Especializada y Convencional",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Tecnología avanzada para detectar y evaluar múltiples condiciones médicas con rapidez y exactitud.",
      link: "/services",
    },
    {
      id: 3,
      title: "Ecografía",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Estudios por ultrasonido realizados con equipos modernos para una valoración segura, cómoda y en tiempo real.",
      link: "/services",
    },
    {
      id: 4,
      title: "Doppler y Duplex Scanning Vasos a Color",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Visualización avanzada de arterias y venas que permite diagnósticos vasculares más precisos. Evaluación especializada del flujo sanguíneo y la salud vascular mediante imágenes de alta definición.",
      link: "/services",
    },
    {
      id: 5,
      title: "Mamografía",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Diagnóstico preventivo y oportuno para el cuidado integral de la salud femenina.",
      link: "/services",
    },
    {
      id: 6,
      title: "Radiología Convencional Digitalizada",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Radiografías digitales con excelente calidad de imagen y resultados ágiles para una atención eficiente.",
      link: "/services",
    },
    {
      id: 11,
      title: "Radiografía Panorámica de Columna (Goniometría u Ortograma)",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Estudios especializados para evaluar postura, alineación y estructuras óseas de manera integral.",
      link: "/services",
    },
    {
      id: 12,
      title: "Colposcopia",
      bgImage: fondoImg,
      icon: emailIcon,
      description: "Procedimiento especializado para la prevención, evaluación y diagnóstico ginecológico.",
      link: "/services",
    },
    {
      id: 13,
      title: "Sedación",
      bgImage: fondoImg,
      icon: emailIcon,
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