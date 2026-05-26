import "../assets/styles/about.css";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVision";
import ValuesSection from "../components/about/ValuesSection";

function About() {
  return (
    <main className="about-page">
        <AboutHero />
        <AboutIntro />
        <MissionVision />
        <ValuesSection />
    </main>
  );
}

export default About;