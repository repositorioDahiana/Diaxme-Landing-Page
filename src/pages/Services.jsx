import "../assets/styles/service.css"; 

import ServicesHero from "../components/services/ServicesHero";
import ServicesHighlight from "../components/services/ServicesHighlight";
import SpecialtiesGrid from "../components/services/SpecialtiesGrid";

function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesHighlight />
      <SpecialtiesGrid />
    </div>
  );
}

export default Services;