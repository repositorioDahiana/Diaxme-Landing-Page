import { Link } from "react-router-dom";
import doctor1 from "../../assets/images/Fondo.jpg"; // Placeholder

function SpecialistsPreview() {
  const specialists = [
    {
      id: 1,
      name: "Dr. Carlos Ruiz",
      specialty: "Radiología Médica",
      subspecialty: "Neurorradiología",
      experience: "15 años",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dra. Ana López",
      specialty: "Radiología Médica",
      subspecialty: "Radiología Pediátrica",
      experience: "10 años",
      image: doctor1,
    },
    {
      id: 3,
      name: "Dr. Luis Gómez",
      specialty: "Radiología Médica",
      subspecialty: "Imágenes de la Mujer",
      experience: "12 años",
      image: doctor1,
    },
    {
      id: 4,
      name: "Dra. María Torres",
      specialty: "Radiología Médica",
      subspecialty: "Radiología Intervencionista",
      experience: "8 años",
      image: doctor1,
    },
  ];

  return (
    <section className="specialists-preview">
      <div className="specialists-preview__container">
        <div className="specialists-preview__header">
          <h2 className="specialists-preview__title">
            Nuestros <span>Especialistas</span>
          </h2>
          <p className="specialists-preview__description">
            Contamos con un equipo médico altamente calificado para brindarte los mejores diagnósticos.
          </p>
          <div className="specialists-preview__line"></div>
        </div>

        <div className="specialists-preview__grid">
          {specialists.map((specialist) => (
            <article key={specialist.id} className="specialist-card">
              <div className="specialist-card__image-container">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="specialist-card__image"
                />
              </div>
              <div className="specialist-card__content">
                <h3 className="specialist-card__name">{specialist.name}</h3>
                <p className="specialist-card__specialty">{specialist.specialty}</p>
                <div className="specialist-card__details">
                  <div className="specialist-card__detail">
                    <span className="specialist-card__label">Subespecialidad:</span>
                    <span className="specialist-card__value">{specialist.subspecialty}</span>
                  </div>
                  <div className="specialist-card__detail">
                    <span className="specialist-card__label">Experiencia:</span>
                    <span className="specialist-card__value">{specialist.experience}</span>
                  </div>
                </div>
                <Link to="/specialists" className="btn btn-secondary-outline specialist-card__button">
                  Ver Perfil
                </Link>
              </div>
            </article>
          ))}
        </div>
        
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
