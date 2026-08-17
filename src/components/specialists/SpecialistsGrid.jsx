import React from "react";
import doctor1 from "../../assets/images/Doctor1.jpeg"; 
import doctor2 from "../../assets/images/Doctor2.jpeg"; 
import doctor3 from "../../assets/images/Doctor3.jpeg"; 
import doctor0 from "../../assets/images/Fondo.jpg";

const specialists = [
  {
    id: 1,
    name: "Dr. Yury",
    specialty: "Radiología Médica",
    subspecialty: "Diagnóstico por Imagen",
    exp: "10+ años de experiencia",
    tags: ["Resonancia", "Tomografía"],
    image: doctor1,
  },
  {
    id: 2,
    name: "Dr. Perez",
    specialty: "Radiología Intervencionista",
    subspecialty: "Procedimientos Mínimamente Invasivos",
    exp: "8+ años de experiencia",
    tags: ["Biopsias", "Drenajes"],
    image: doctor2,
  },
  {
    id: 3,
    name: "Dr. Willsom Garcia",
    specialty: "Medicina Nuclear",
    subspecialty: "Tomografía y Resonancia",
    exp: "12+ años de experiencia",
    tags: ["TAC", "PET-CT"],
    image: doctor3,
  },
  {
    id: 4,
    name: "Dra. María Torres",
    specialty: "Radiología Médica",
    subspecialty: "Radiología Intervencionista",
    exp: "6+ años de experiencia",
    tags: ["Ecografía", "Doppler"],
    image: doctor0,
  },
];

function SpecialistsGrid() {
  return (
    <section className="specialists-grid" id="equipo">
      <div className="specialists-grid__container">

        {/* HEADER */}
        <div className="specialists-grid__header">
          <h2 className="specialists-grid__title">
            Conoce a Nuestros{" "}
            <span className="text-gradient-blue">Especialistas</span>
          </h2>

          <p className="specialists-grid__description">
            Médicos Diaxme y especialistas altamente calificados,
            comprometidos con la excelencia diagnóstica.
          </p>
        </div>

        {/* GRID */}
        <div className="specialists-grid__content">
          {specialists.map((doc) => (
            <article key={doc.id} className="specialist-card">

              {/* IMAGE */}
              <div className="specialist-card__image">
                <img src={doc.image} alt={doc.name} />
              </div>

              {/* INFO */}
              <div className="specialist-card__info">
                <h3 className="specialist-card__name">{doc.name}</h3>

                <span className="specialist-card__specialty">
                  {doc.specialty}
                </span>

                {/* Corrección: Cambiado doc.sub por doc.subspecialty */}
                <p className="specialist-card__sub">{doc.subspecialty}</p>

                {/* Muestra experiencia si existe */}
                {doc.exp && (
                  <div className="specialist-card__exp">
                    ⏱ {doc.exp}
                  </div>
                )}

                {/* TAGS: Validación con encadenamiento opcional (?.) */}
                <div className="specialist-card__tags">
                  {doc.tags?.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialistsGrid;