import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import experienciaIcon from "../../assets/Iconos/Tiempo.png";
import sedesIcon from "../../assets/Iconos/Ubicacion.png";
import pacientesIcon from "../../assets/Iconos/paciente.png";
import especialidadesIcon from "../../assets/Iconos/rayos-x.png";

function Counter({ end, suffix = "", duration = 2000, startFrom = 0, loop = false }) {
  const [count, setCount] = useState(startFrom);

  useEffect(() => {
    let start = startFrom;
    // Calculamos el incremento por frame (aprox 60fps -> 16ms)
    const increment = (end - startFrom) / (duration / 16);
    let timer;

    const runCounter = () => {
      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          clearInterval(timer);
          setCount(end); 

          if (loop) {
            setTimeout(() => {
              start = startFrom;
              setCount(startFrom);
              runCounter(); 
            }, 1200); // Pausa antes de reiniciar el bucle
          }
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    runCounter();

    return () => {
      clearInterval(timer);
    };
  }, [end, duration, startFrom, loop]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function AboutSummary() {
  const getExperienceYears = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); 
    
    if (currentMonth < 1) {
      return currentYear - 2014 - 1;
    }
    return currentYear - 2014;
  };

  const yearsOfExperience = getExperienceYears();

  const stats = [
    {
      id: 1,
      icon: experienciaIcon,
      end: yearsOfExperience,
      suffix: "+",
      label: "Años de Experiencia",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 2,
      icon: sedesIcon,
      end: 2, 
      suffix: "+",
      label: "Sedes en Colombia",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 3,
      icon: pacientesIcon,
      startFrom: 250,  // EMPIEZA EN 300 tal como me pediste
      end: 301,        // Sube sumando pacientemente en el bucle
      loop: true,            
      duration: 65000, // Duración larga para que se vea el conteo uno a uno de forma realista
      suffix: "K+",
      label: "Pacientes Atendidos",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 4,
      icon: especialidadesIcon,
      end: 6, 
      suffix: "+",
      label: "Especialidades Médicas",
      iconClass: "about-summary__icon-box--blue",
    },
  ];

  return (
    <section className="about-summary">
      <div className="about-summary__container">
        <div className="about-summary__header">
          <h2 className="about-summary__title">
            ¿Por Qué <span>Elegirnos?</span>
          </h2>

          <p className="about-summary__description">
            Llevamos la innovación médica al corazón del Llano. En Diaxme 
            protegemos tu salud con los servicios más avanzados de resonancia, 
            tomografía y radiología.
          </p>

          <div className="about-summary__line"></div>
        </div>

        <div className="about-summary__grid">
          {stats.map((item) => (
            <article key={item.id} className="about-summary__card">
              <div className={`about-summary__icon-box ${item.iconClass}`}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="about-summary__icon"
                />
              </div>

              <div className="about-summary__card-content">
                <h3 className="about-summary__number">
                  <Counter 
                    end={item.end} 
                    suffix={item.suffix} 
                    startFrom={item.startFrom || 0} 
                    loop={item.loop || false}
                    duration={item.duration || 2000}
                  />
                </h3>
                <p className="about-summary__label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-summary__highlight">
          <span className="about-summary__dot"></span>
          <p>
            Más de <strong>300,000 pacientes</strong> han confiado en nosotros
            para su diagnóstico médico.
          </p>
        </div>

        <div className="about-summary__actions">
          <Link to="/about" className="about-summary__button">
            Conoce más de nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSummary;