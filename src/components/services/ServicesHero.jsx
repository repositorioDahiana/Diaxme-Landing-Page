import { useState, useEffect } from "react";

import img1 from "../../assets/images/Servicio1.jpg";
import img2 from "../../assets/images/Servicio2.jpg";
import img3 from "../../assets/images/Servicio3.jpg";

const slides = [
  {
    title: (
      <>
        Diagnósticos de alta precisión para cuidar lo que más importa tu salud
      </>
    ),
    description:
      "Accede a nuestro catálogo integral de servicios médicos: Resonancia Magnética, Mamografía Digital, Ecografía Doppler, Colposcopia y Sedación. Tecnología avanzada para diagnósticos oportunos y confiables.",
    image: img1,
  },
  {
    title: (
      <>
        Tecnología de vanguardia para estudios simples y de alta complejidad
      </>
    ),
    description:
      "Realizamos Resonancia Magnética Convencional (cerebro, columna, articulaciones) y Resonancia Magnética Nuclear Especializada (cardíaca, multiparamétrica, vascular) con protocolos de máximo confort e imágenes en alta resolución.",
    image: img2,
  },
  {
    title: (
      <>
        Exámenes preventivos con atención cálida, privada y cero dolor
      </>
    ),
    description:
      "Mamografía digital con baja radiación, evaluación ginecológica con Colposcopia y Doppler Scanning Vasos a Color. Además, contamos con servicio de Sedación para garantizarte una experiencia relajada y sin estrés.",
    image: img3,
  },
];

function ServicesHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="services-hero__overlay"></div>

      <div className="services-hero__container">
        <div className="services-hero__content">
          <h1 className="services-hero__title">
            {slide.title}
          </h1>

          <p className="services-hero__description">
            {slide.description}
          </p>

          <div className="services-hero__actions">
            <a href="#servicios" className="btn-base btn-primary-brand">
              Ver más servicios
            </a>
          </div>

        </div>
      </div>

      {/* Flechas */}
      <button className="nav-arrow left" onClick={prevSlide}>
        ‹
      </button>

      <button className="nav-arrow right" onClick={nextSlide}>
        ›
      </button>
    </section>
  );
}

export default ServicesHero;