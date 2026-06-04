import { Link } from "react-router-dom";
import iconPlaceholder from "../../assets/Iconos/email.png";

function AgreementsPreview() {
  const categories = [
    {
      id: "medicina-prepagada",
      title: "Medicina Prepagada",
      description: "Atención preferencial y ágil con las mejores entidades de medicina prepagada.",
      allies: [
        { name: "Alianza 1", icon: iconPlaceholder },
        { name: "Alianza 2", icon: iconPlaceholder },
        { name: "Alianza 3", icon: iconPlaceholder },
        { name: "Alianza 4", icon: iconPlaceholder },
        { name: "Alianza 5", icon: iconPlaceholder },
      ]
    },
    {
      id: "polizas",
      title: "Pólizas de Salud",
      description: "Cobertura amplia a través de pólizas de salud para tu tranquilidad.",
      allies: [
        { name: "Póliza 1", icon: iconPlaceholder },
        { name: "Póliza 2", icon: iconPlaceholder },
        { name: "Póliza 3", icon: iconPlaceholder },
        { name: "Póliza 4", icon: iconPlaceholder },
      ]
    },
    {
      id: "empresas",
      title: "Convenios Empresas",
      description: "Beneficios exclusivos para empleados y colaboradores de empresas aliadas.",
      allies: [
        { name: "Empresa 1", icon: iconPlaceholder },
        { name: "Empresa 2", icon: iconPlaceholder },
        { name: "Empresa 3", icon: iconPlaceholder },
        { name: "Empresa 4", icon: iconPlaceholder },
      ]
    },
    {
      id: "regimen-especial",
      title: "Régimen Especial",
      description: "Atención especializada para usuarios de regímenes de salud especiales.",
      allies: [
        { name: "Especial 1", icon: iconPlaceholder },
        { name: "Especial 2", icon: iconPlaceholder },
        { name: "Especial 3", icon: iconPlaceholder },
        { name: "Especial 4", icon: iconPlaceholder },
      ]
    },
    {
      id: "eps-caja",
      title: "EPS y Caja de Compensación",
      description: "Servicios accesibles a través de convenios con EPS y cajas de compensación.",
      allies: [
        { name: "EPS 1", icon: iconPlaceholder },
        { name: "Caja 1", icon: iconPlaceholder },
        { name: "EPS 2", icon: iconPlaceholder },
        { name: "Caja 2", icon: iconPlaceholder },
      ]
    }
  ];

  return (
    <section className="agreements-preview">
      <div className="agreements-preview__container">
        <div className="agreements-preview__header">
          <h2 className="agreements-preview__title">
            Nuestros <span>Convenios</span>
          </h2>
          <p className="agreements-preview__description">
            Trabajamos con las principales aseguradoras, entidades y empresas del país para brindarte un servicio accesible y de calidad.
          </p>
          <div className="agreements-preview__line"></div>
        </div>

        <div className="agreements-preview__grid">
          {categories.map((category) => (
            <article key={category.id} className="agreement-card">
              <div className="agreement-card__content">
                <h3 className="agreement-card__title">{category.title}</h3>
                <p className="agreement-card__description">{category.description}</p>
              </div>
              
              <div className="agreement-card__marquee-container">
                <div className="agreement-card__marquee">
                  {/* Duplicamos los items para efecto infinito fluido */}
                  {[...category.allies, ...category.allies].map((ally, index) => (
                    <div key={`${category.id}-ally-${index}`} className="agreement-card__ally">
                      <img src={ally.icon} alt={ally.name} className="agreement-card__ally-icon" />
                      <span className="agreement-card__ally-name">{ally.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="agreements-preview__actions">
          <Link to="/allies" className="btn btn-primary-brand">
            Ver todos los convenios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AgreementsPreview;
