import cardioIcon from "../../assets/Iconos/email.png";
import consultaIcon from "../../assets/Iconos/email.png";
import dopplerIcon from "../../assets/Iconos/email.png";
import ecoIcon from "../../assets/Iconos/email.png";


const specialties = [
  { 
    id: 1, 
    title: "TItulo", 
    icon: cardioIcon, 
    desc: "Texto" 
  },
  { 
    id: 2, 
    title: "Titulo", 
    icon: consultaIcon, 
    desc: "Texto" 
  },
  { 
    id: 3, 
    title: "Titulo", 
    icon: dopplerIcon, 
    desc: "Texto" 
  },
  { 
    id: 4, 
    title: "Titulo", 
    icon: ecoIcon, 
    desc: "Texto" 
  },
];

function SpecialtiesGrid() {
  return (
    <section className="specialties" id="especialidad">
      <div className="specialties__container">

        {/* HEADER */}
        <div className="specialties__header">
          <h2 className="specialties__title">
            Nuestras <span className="text-gradient-blue">Especialidades</span>
          </h2>

          <p className="specialties__description">
            ?? Texto
          </p>
        </div>

        {/* GRID */}
        <div className="specialties__grid">
          {specialties.map((item) => (
            <article key={item.id} className="specialty-card">

              <div className="specialty-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialtiesGrid;