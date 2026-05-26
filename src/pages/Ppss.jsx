import "../assets/styles/ppss.css";

import PpssHero from "../components/ppss/PpssHero";
import PpssAxes from "../components/ppss/PpssAxes";
import UserAssociation from "../components/ppss/UserAssociation";

function Ppss() {
  return (
    <div className="ppss-page">
      <PpssHero />
      <PpssAxes />
      <UserAssociation />
    </div>
  );
}

export default Ppss;