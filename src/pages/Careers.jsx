import "../assets/styles/careers.css";

import CareersHero from "../components/careers/CareersHero";
import CareersBenefits from "../components/careers/CareersBenefits";
import VacanciesSection from "../components/careers/VacanciesSection";
import ApplySection from "../components/careers/ApplySection";

function Careers() {
  return (
    <main className="careers-page">
        <CareersHero />
        <CareersBenefits />
        <VacanciesSection />
        <ApplySection />
    </main>
  );
}

export default Careers;
