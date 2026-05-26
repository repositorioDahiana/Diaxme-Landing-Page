import icon1 from "../../assets/Iconos/email.png";
import icon2 from "../../assets/Iconos/email.png";
import icon3 from "../../assets/Iconos/email.png";
import icon4 from "../../assets/Iconos/email.png";
import img1 from "../../assets/images/Fondo.jpg";
import img2 from "../../assets/images/Fondo.jpg";
import img3 from "../../assets/images/Fondo.jpg";
import img4 from "../../assets/images/Fondo.jpg";


const services = [
  {
    title: "Titulo",
    desc: "Texto",
    icon: icon1,
    image: img1,
  },
  {
    title: "Titulo",
    desc: "Texto",
    icon: icon2,
    image: img2,
  },
  {
    title: "Titulo",
    desc: "Texto",
    icon: icon3,
    image: img3,
  },
  {
    title: "Titulo",
    desc: "Texto",
    icon: icon4,
    image: img4,
  },
];

function ServicesHighlight() {
  return (
    <section className="services-highlight" id="servicios">
      <div className="services-highlight__container">

        {/* HEADER */}
        <div className="services-highlight__header">
          <h2 className="services-highlight__title">
            Estudios <span className="text-gradient-blue">Especializados</span>
          </h2>

          <p className="services-highlight__description">
            ?? Texto
          </p>
        </div>

        {/* GRID */}
        <div className="services-highlight__grid">
          {services.map((item, index) => (
            <article
              key={item.id}
              className="service-card-flip"
            >
              <div className="service-card-flip__inner">

                {/* FRONT */}
                <div
                  className={`service-card service-card--front ${
                    index % 2 === 0 ? "service-card--blue" : ""
                  }`}
                >
                  <div className="service-card__icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div className="service-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="service-card service-card--back">
                  <img src={item.image} alt={item.title} />
                </div>

              </div>
            </article>
            ))}
        </div>

        <div className="services-hero__actions">
            <a href="#especialidad" className="btn-base btn-primary-brand">
              Ver más servicios
            </a>
          </div>

      </div>
    </section>
  );
}

export default ServicesHighlight;