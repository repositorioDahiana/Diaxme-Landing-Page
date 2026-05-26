import "../assets/styles/specialists.css";
import SpecialistsHero from "../components/specialists/SpecialistsHero";
import SpecialistsGrid from "../components/specialists/SpecialistsGrid";

function Specialists() {
  return (
    <main className="specialists-page">
      <SpecialistsHero />
      <SpecialistsGrid />
    </main>
  );
}

export default Specialists;