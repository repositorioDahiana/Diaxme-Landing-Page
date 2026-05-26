import empresaImg from "../../assets/images/Fondo.jpg";

function CompanyHero() {
  return (
    <section className="company-hero">

      <div className="company-hero__container">

        {/* IZQUIERDA */}
        <div className="company-hero__content">
          <h1 className="company-hero__title">
            Nuestra <span className="text-gradient-brand">Empresa</span>
          </h1>

          <p className="company-hero__description">
            ? Descripcion
          </p>

          {/* Cambiado a la clase del botón borgoña premium */}
          <a href="/contacto" className="btn-base btn-primary-brand">
            Conócenos más
          </a>

        </div>

        {/* DERECHA */}
        <div className="company-hero__image">

          <img src={empresaImg} alt="Nuestra empresa" />

        </div>

      </div>

    </section>
  );
}

export default CompanyHero;