import "../assets/styles/home.css";
import Hero from "../components/home/Hero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesPreview from "../components/home/ServicesPreview";
import LocationsPreview from "../components/home/LocationsPreview";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ServicesPreview />
      <AboutSummary />
      <LocationsPreview />
    </main>
  );
}

export default Home;