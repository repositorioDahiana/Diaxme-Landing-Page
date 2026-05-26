import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tecnologiaHero from "../../assets/images/Fondo.jpg";
import especialistasHero from "../../assets/images/Fondo.jpg";
import clinicaHero from "../../assets/images/Fondo.jpg";
import resultadosIcon from "../../assets/Iconos/Resultados.png";
import agendarIcon from "../../assets/Iconos/paciente.png";
import experienciaIcon from "../../assets/Iconos/Tiempo.png";
import sedesIcon from "../../assets/Iconos/Ubicacion.png";
import pacientesIcon from "../../assets/Iconos/Resonancia.png";

const slides = [
  {
    id: 1,
    title: "La tecnología médica ",
    highlight: "del futuro, hoy",
    description:
      "Sin viajes ni esperas. Diaxme lidera la innovación en Villavicencio y Acacías con servicios de resonancia y tomografía de alta precisión para cuidar tu bienestar.",
    image: tecnologiaHero,
    alt: "Equipo de Resonancia Magnética",
  },
  {
    id: 2,
    title: "Diagnósticos rápidos ",
    highlight: "y cerca de ti",
    description:
      "Porque tu bienestar es nuestra mayor vocación, en Diaxme unimos la mejor tecnología con un servicio profundamente humano para cuidar de tu salud y darte la tranquilidad que mereces.",
    image: especialistasHero,
    alt: "Equipo médico",
  },
  {
    id: 3,
    title: "Experiencia médica ",
    highlight: "a tu alcance",
    description:
      "Te acompañamos en cada paso con un equipo de profesionales dedicados a proteger tu bienestar, brindándote una atención llena de respeto, calidez y el cuidado que tu vida merece.",
    image: clinicaHero,
    alt: "Clínica Radiólogos",
  },
];


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label={slide.alt}
    >
      <div className="hero__overlay"></div>

      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            {slide.title}
            <span className="highlight">{slide.highlight}</span>
          </h1>

          <p className="hero__description">{slide.description}</p>

          <div className="hero__actions">
            {/* Actualizado a btn-primary para usar el degradado animado borgoña suave */}
            <a
              href="https://nexxa.com.co/portal/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <img src={resultadosIcon} alt="" className="btn-icon" />
              Ver Resultados
            </a>

            {/* Actualizado a btn-primary para mantener la consistencia visual */}
            <a
              href="https://appcedira.com/solicitarcita/public/consultar-cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <img src={agendarIcon} alt="" className="btn-icon btn-icon--agendar" />
              Consultar Cita
            </a>
          </div>
        </div>

        <div className="hero__stats">

          {/* 1 - ABOUT */}
          <div
            className="hero__statItem"
            onClick={() => navigate("/about")}
          >
            <img
              src={experienciaIcon}
              alt="Años de experiencia"
              className="hero__statIcon"
            />
            <div className="hero__statText">
              <div className="hero__statNumber">12+</div>
              <div className="hero__statLabel">Años de Experiencia</div>
            </div>
          </div>

          {/* 2 - SCROLL A HOME SECTION */}
          <a href="#ubicacion" style={{ textDecoration: "none" }}>
            <div className="hero__statItem">
              <img
                src={sedesIcon}
                alt="Sedes"
                className="hero__statIcon hero__statIcon--sedes"
              />
              <div className="hero__statText">
                <div className="hero__statNumber">2+</div>
                <div className="hero__statLabel">Sedes</div>
              </div>
            </div>
          </a>

          {/* 3 - ABOUT */}
          <div
            className="hero__statItem"
            onClick={() => navigate("/about")}
          >
            <img
              src={pacientesIcon}
              alt="Pacientes"
              className="hero__statIcon"
            />
            <div className="hero__statText">
              <div className="hero__statNumber">300K+</div>
              <div className="hero__statLabel">Pacientes</div>
            </div>
          </div>

        </div>

        <button className="nav-arrow left" onClick={prevSlide} aria-label="Anterior slide">
          ‹
        </button>

        <button className="nav-arrow right" onClick={nextSlide} aria-label="Siguiente slide">
          ›
        </button>
      </div>
    </section>
  );
}

export default Hero;