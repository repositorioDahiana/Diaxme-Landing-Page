import { useState, useEffect } from "react";

import img1 from "../../assets/images/Fondo.jpg";
import img2 from "../../assets/images/Fondo.jpg";
import img3 from "../../assets/images/Fondo.jpg";

const slides = [
  {
    title: (
      <>
        Titulo
      </>
    ),
    description:
      "Texto",
    image: img1,
  },
  {
    title: (
      <>
        Titulo
      </>
    ),
    description:
      "Texto",
    image: img2,
  },
  {
    title: (
      <>
        Titulo
      </>
    ),
    description:
      "Texto",
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