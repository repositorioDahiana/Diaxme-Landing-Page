import especialistasHero from "../../assets/images/Fondo.jpg";

function SpecialistsHero() {
  return (
    <section
      className="specialists-hero"
      style={{ backgroundImage: `url(${especialistasHero})` }}
    >
      <div className="specialists-hero__overlay"></div>

      <div className="specialists-hero__container">
        <div className="specialists-hero__content">
          <h1 className="specialists-hero__title">
            Nuestro Equipo de{" "}
            <span className="text-gradient-brand">Especialistas</span>
          </h1>

          <p className="specialists-hero__description">
            ?? Texto
          </p>

          <div className="specialists-hero__actions">
            <a href="#equipo" className="btn-base btn-primary-brand">
              Ver Especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistsHero;