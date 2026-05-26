import "../assets/styles/pqrs.css";
import PQRSHero from "../components/pqrs/PQRSHero";
import PQRSForm from "../components/pqrs/PQRSForm";
import PQRSContact from "../components/pqrs/PQRSContact";

function PQRS() {
  return (
    <div className="pqrs-page">

        <PQRSHero />
        <PQRSForm />
        <PQRSContact />
    </div>
  );
}

export default PQRS;