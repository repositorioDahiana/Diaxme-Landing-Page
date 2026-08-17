import especialistasHero from "../../assets/images/Servicio360.jpg";

function Hero360() {
  return (
    <section
      className="hero360"
      style={{ backgroundImage: `url(${especialistasHero})` }}
    >
      <div className="hero360__overlay"></div>

      <div className="hero360__container">
        <div className="hero360__content">
          <h1 className="hero360__title">
            Descubre el Futuro con Nuestros <br />
            <span className="text-gradient-blue">Servicios 360</span>
          </h1>

          <p className="hero360__description">
            Estamos preparando una experiencia revolucionaria. Muy pronto podrás acceder a una atención integral y tecnología de punta, diseñada exclusivamente para ti.
          </p>

          <div className="hero360__actions">
            <a href="/services" className="btn-base btn-primary-brand">
              Conoce Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero360;