import "../assets/styles/Company.css";
import CompanyHero from "../components/company/CompanyHero";
import HistoryTimeline from "../components/company/HistoryTimeline";
import PrincipleSection from "../components/company/PrinciplesSection";
import TechnologySection from "../components/company/TechnologySection";

function About() {
  return (
    <main className="about-page">
        <CompanyHero />
        <HistoryTimeline />
        <PrincipleSection />
        <TechnologySection />
    </main>
  );
}

export default About;