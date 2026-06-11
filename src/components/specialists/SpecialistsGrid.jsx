import img1 from "../../assets/images/DrGarcia.jpeg";
import img2 from "../../assets/images/DrPerez.jpeg";
import img3 from "../../assets/images/DrYury.jpeg";
import img4 from "../../assets/images/Fondo.jpg";
import img5 from "../../assets/images/Fondo.jpg";
import img6 from "../../assets/images/Fondo.jpg";
import img7 from "../../assets/images/Fondo.jpg";
import img8 from "../../assets/images/Fondo.jpg";
import img9 from "../../assets/images/Fondo.jpg";
import img10 from "../../assets/images/Fondo.jpg";
import img11 from "../../assets/images/Fondo.jpg";
import img12 from "../../assets/images/Fondo.jpg";
import img13 from "../../assets/images/Fondo.jpg";
import img14 from "../../assets/images/Fondo.jpg";
import img15 from "../../assets/images/Fondo.jpg";

const specialists = [
  {
    id: 1,
    name: "Dr. Carlos Andrés Mejía",
    specialty: "Radiología Diagnóstica",
    sub: "Neurorradiología",
    exp: "18 años de experiencia",
    tags: ["Resonancia Magnética", "Neurorradiología"],
    image: img1,
  },
  {
    id: 2,
    name: "Dra. Marcela Ríos Ospina",
    specialty: "Radiología e Imágenes Diagnósticas",
    sub: "Radiología de Mama",
    exp: "14 años de experiencia",
    tags: ["Mamografía", "Ecografía Mamaria"],
    image: img2,
  },
  // 👇 puedes repetir patrón hasta 15
  {
    id: 3,
    name: "Dr. Hernán Darío Zuluaga",
    specialty: "Cardiología",
    sub: "Ecocardiografía",
    exp: "22 años de experiencia",
    tags: ["Ecocardiografía", "Holter"],
    image: img3,
  },
  {
    id: 4,
    name: "Dra. Paola Andrea Gómez",
    specialty: "Radiología Intervencionista",
    sub: "Procedimientos guiados",
    exp: "11 años de experiencia",
    tags: ["Biopsias", "Drenajes"],
    image: img4,
  },
];

function SpecialistsGrid() {
  return (
    <section className="specialists-grid"  id="equipo">
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

                <p className="specialist-card__sub">{doc.sub}</p>

                <div className="specialist-card__exp">
                  ⏱ {doc.exp}
                </div>

                {/* TAGS */}
                <div className="specialist-card__tags">
                  {doc.tags.map((tag, i) => (
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