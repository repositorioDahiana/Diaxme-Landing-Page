import { useMemo, useState } from "react";

import losRosalesImg from "../../assets/images/Fondo.jpg";
import comfamiliarImg from "../../assets/images/Fondo.jpg";
import sanRafaelImg from "../../assets/images/Fondo.jpg";
import centroMedicoImg from "../../assets/images/Fondo.jpg";
import pinaresImg from "../../assets/images/Fondo.jpg";

import ubicacionIcon from "../../assets/Iconos/Ubicacion.png";
import relojIcon from "../../assets/Iconos/email.png";
import estudiosIcon from "../../assets/Iconos/email.png";

function LocationsPreview() {

  const [activeCity, setActiveCity] = useState("Villavicencio");

  const [selectedLocation, setSelectedLocation] = useState(null);

  const headquarters = [

    {
      id: 1,
      city: "Villavicencio",

      image: losRosalesImg,

      title: "Diaxme Sede Villavicencio",

      address: "Carrera 34 No. 15-33 Barrio Nuevo Ricaurte",

      maps:
        "https://www.google.com/maps/search/?api=1&query=Carrera+9+No+25-59+Pereira",

      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",

      schedule2: "Hospitalarios: 24 x 7",

      featured: false,

      studies: [
        "Texto",
        "Texto",
      ],
    },

    {
      id: 2,
      city: "Acacías",

      image: comfamiliarImg,

      title: "Diaxme Sede Acacías",

      address: "Calle 13 N° 16-58 Primer Piso",

      maps:
        "https://www.google.com/maps/search/?api=1&query=Avenida+Circunvalar+Pereira",

      schedule1: "L-V: 6:00 a.m. – 9:00 p.m.",

      schedule2: "S: 6:00 a.m. – 6:00 p.m.",

      featured: false,

      studies: [
        "Texto",
        "Texto",
        "Texto",
      ],
    },
  ];

  const cities = ["Villavicencio", "Acacías"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity]);

  return (

    <>
      <section className="locations-preview" id="ubicacion">

        <div className="locations-preview__container">

          {/* HEADER */}
          <div className="locations-preview__header">

            <h2 className="locations-preview__title">
              Encuentra tu sede<span> más cercana</span>
            </h2>

            <div className="locations-preview__line"></div>

            <p className="locations-preview__description">
              Selecciona tu ciudad y descubre nuestras sedes con horarios,
              direcciones y servicios disponibles
            </p>

            {/* TABS */}
            <div className="locations-preview__tabs">

              {cities.map((city) => (

                <button
                  key={city}
                  type="button"
                  className={`locations-preview__tab ${
                    activeCity === city
                      ? "locations-preview__tab--active"
                      : ""
                  }`}
                  onClick={() => setActiveCity(city)}
                >
                  {city}
                </button>

              ))}

            </div>

          </div>

          {/* GRID */}
          <div className="locations-preview__grid">

            {filteredHeadquarters.map((item) => (

              <article
                key={item.id}
                className={`locations-preview__card ${
                  item.featured
                    ? "locations-preview__card--featured"
                    : ""
                }`}
                onClick={() => setSelectedLocation(item)}
              >

                {/* IMAGE */}
                <div className="locations-preview__image-wrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="locations-preview__image"
                  />

                </div>

                {/* CONTENT */}
                <div className="locations-preview__content">

                  <h3 className="locations-preview__card-title">
                    {item.title}
                  </h3>

                  {/* ADDRESS */}
                  <div className="locations-preview__address">

                    <img
                      src={ubicacionIcon}
                      alt="Ubicación"
                      className="locations-preview__meta-icon"
                    />

                    <span>{item.address}</span>

                  </div>

                  {/* SCHEDULE */}
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

      {/* ==================== MODAL ==================== */}

      {selectedLocation && (

        <div
          className="locations-modal"
          onClick={() => setSelectedLocation(null)}
        >

          <div
            className="locations-modal__content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              className="locations-modal__close"
              onClick={() => setSelectedLocation(null)}
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedLocation.image}
              alt={selectedLocation.title}
              className="locations-modal__image"
            />

            {/* BODY */}
            <div className="locations-modal__body">

              <h2 className="locations-modal__title">
                {selectedLocation.title}
              </h2>

              <div className="locations-modal__address">

                <img
                  src={ubicacionIcon}
                  alt="Ubicación"
                />

                <span>{selectedLocation.address}</span>

              </div>

              <div className="locations-modal__studies">

                <h3>
                  Estudios disponibles
                </h3>

                <div className="locations-modal__studies-grid">

                  {selectedLocation.studies.map((study, index) => (

                    <div
                      className="locations-modal__study"
                      key={index}
                    >

                      <img
                        src={estudiosIcon}
                        alt={study}
                      />

                      <span>{study}</span>

                    </div>

                  ))}

                </div>

              </div>

              {/* BUTTONS */}
              <div className="locations-modal__actions">

                <a
                  href={selectedLocation.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary-blue"
                >
                  Ver ubicación
                </a>

                <a
                  href="/agendamiento"
                  className="btn-base btn-secondary-outline"
                >
                  Agendar cita
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default LocationsPreview;