import { useMemo, useState } from "react";

import losRosalesImg from "../../assets/images/Sede1.jpg";
import comfamiliarImg from "../../assets/images/Fondo.jpg";
import ubicacionIcon from "../../assets/Iconos/Ubicacion.png";
import relojIcon from "../../assets/Iconos/Tiempo.png";

function LocationsPreview() {
  const [activeCity, setActiveCity] = useState("Villavicencio");

  const headquarters = [
    {
      id: 1,
      city: "Villavicencio",
      image: losRosalesImg,
      title: "Diaxme Sede Villavicencio",
      address: "Carrera 34 No. 15-33 Barrio Nuevo Ricaurte",
      schedule1: "L-V: 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 2,
      city: "Acacías",
      image: comfamiliarImg,
      title: "Diaxme Sede Acacías",
      address: "Calle 13 N° 16-58 Primer Piso",
      schedule1: "L-V: 8:00 a.m. – 6:00 p.m.",
      schedule2: "S: 8:00 a.m. – 11:00 p.m.",
      featured: false,
    },
  ];

  const cities = ["Villavicencio","Acacías"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity]);

  return (
    <section className="locations-preview" id="ubicacion">
      <div className="locations-preview__container">
        <div className="locations-preview__header">
          <h2 className="locations-preview__title">
            Nuestras <span>Ubicaciones</span>
          </h2>

          <div className="locations-preview__line"></div>

          <p className="locations-preview__description">
            Encuentra nuestra clínica más cercana y conoce nuestros horarios de
            atención.
          </p>

          <div className="locations-preview__tabs">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`locations-preview__tab ${
                  activeCity === city ? "locations-preview__tab--active" : ""
                }`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="locations-preview__grid">
          {filteredHeadquarters.map((item) => (
            <article
              key={item.id}
              className={`locations-preview__card ${
                item.featured ? "locations-preview__card--featured" : ""
              }`}
            >
              <div className="locations-preview__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="locations-preview__image"
                />
              </div>

              <div className="locations-preview__content">
                <h3 className="locations-preview__card-title">{item.title}</h3>

                <div className="locations-preview__address">
                  <img
                    src={ubicacionIcon}
                    alt="Ubicación"
                    className="locations-preview__meta-icon"
                  />
                  <span>{item.address}</span>
                </div>

                <div className="locations-preview__schedule-box">
                  <div className="locations-preview__schedule-title">
                    <img
                      src={relojIcon}
                      alt="Horarios"
                      className="locations-preview__meta-icon"
                    />
                    <span>HORARIOS</span>
                  </div>

                  <p>{item.schedule1}</p>
                  <p>{item.schedule2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsPreview;