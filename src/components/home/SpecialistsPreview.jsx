import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import doctor1 from "../../assets/images/Doctor1.jpeg"; 
import doctor2 from "../../assets/images/Doctor2.jpeg"; 
import doctor3 from "../../assets/images/Doctor3.jpeg"; 
import doctor0 from "../../assets/images/Fondo.jpg";

function SpecialistsPreview() {
  const carouselRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isHoveredRef = useRef(false);

  const specialists = [
    {
      id: 1,
      name: "Dr. Yury",
      specialty: "Radiología Médica",
      subspecialty: "Diagnóstico por Imagen",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. Perez",
      specialty: "Radiología Intervencionista",
      subspecialty: "Procedimientos Mínimamente Invasivos",
      image: doctor2,
    },
    {
      id: 3,
      name: "Dr. Willsom Garcia",
      specialty: "Medicina Nuclear",
      subspecialty: "Tomografía y Resonancia",
      image: doctor3,
    },
    {
      id: 4,
      name: "Dra. María Torres",
      specialty: "Radiología Médica",
      subspecialty: "Radiología Intervencionista",
      image: doctor0,
    },
  ];

  // Duplicación necesaria para el bucle de desplazamiento continuo
  const duplicatedSpecialists = [...specialists, ...specialists];

  // Auto-scroll continuo usando el ciclo de animación del navegador
  useEffect(() => {
    const container = carouselRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (container && !isScrollingRef.current && !isHoveredRef.current) {
        container.scrollLeft += 1;
        const jumpDistance = container.scrollWidth / 2;

        if (container.scrollLeft >= jumpDistance) {
          container.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      isScrollingRef.current = true;
      const jumpDistance = container.scrollWidth / 2;
      const scrollAmount = 320;

      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollLeft = jumpDistance;
        }
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        if (container.scrollLeft >= jumpDistance - scrollAmount) {
          container.scrollLeft = container.scrollLeft - jumpDistance;
        }
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <section className="specialists-preview">
      <div className="specialists-preview__container">
        
        {/* Encabezado */}
        <div className="specialists-preview__header">
          <h2 className="specialists-preview__title">
            Nuestros <span>Especialistas</span>
          </h2>
          <p className="specialists-preview__description">
            Contamos con un equipo médico altamente calificado para brindarte los mejores diagnósticos.
          </p>
          <div className="specialists-preview__line"></div>
        </div>

        {/* Carrusel con Auto-scroll y Botones */}
        <div 
          className="specialists-preview__carousel-container"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          <button 
            className="specialist-nav-btn specialist-nav-btn--left" 
            onClick={() => handleScroll("left")}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="specialists-preview__carousel-wrapper" ref={carouselRef}>
            <div className="specialists-preview__carousel">
              {duplicatedSpecialists.map((specialist, index) => (
                <article 
                  key={`${specialist.id}-${index}`} 
                  className="specialist-card"
                >
                  <div className="specialist-card__image-container">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="specialist-card__image"
                      loading="lazy"
                    />
                  </div>
                  <div className="specialist-card__content">
                    <h3 className="specialist-card__name">{specialist.name}</h3>
                    <p className="specialist-card__specialty">{specialist.specialty}</p>
                    
                    <div className="specialist-card__details">
                      <div className="specialist-card__detail">
                        <span className="specialist-card__value">{specialist.subspecialty}</span>
                      </div>
                    </div>

                    <Link to="/specialists" className="btn btn-secondary-outline specialist-card__button">
                      Ver Perfil
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button 
            className="specialist-nav-btn specialist-nav-btn--right" 
            onClick={() => handleScroll("right")}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Acción General */}
        <div className="specialists-preview__actions">
          <Link to="/specialists" className="btn btn-primary-brand">
            Ver todos los especialistas
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SpecialistsPreview;