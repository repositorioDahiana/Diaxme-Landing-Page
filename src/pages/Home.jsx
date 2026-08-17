import "../assets/styles/home.css";
import Hero from "../components/home/Hero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesPreview from "../components/home/ServicesPreview";
import LocationsPreview from "../components/location/LocationIntro";
import SpecialistsPreview from "../components/home/SpecialistsPreview";
import AgreementsPreview from "../components/home/AgreementsPreview";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ServicesPreview />
      <AboutSummary />
      <SpecialistsPreview />
      <LocationsPreview />
      <AgreementsPreview />
    </main>
  );
}

export default Home;