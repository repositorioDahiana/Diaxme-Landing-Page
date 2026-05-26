import "../assets/styles/allies.css";

import AlliesHero from "../components/allies/AlliesHero";
import AlliesIntro from "../components/allies/AlliesIntro";
import AlliesPrepaid from "../components/allies/AlliesPrepaid";
import AlliesPols from "../components/allies/AlliesPols";
import AlliesRegEspcial from "../components/allies/AlliesRegEspcial";
import AlliesConEmp from "../components/allies/AlliesConEmp";
import AlliesCaja from "../components/allies/AlliesCaja";

function Ppss() {
  return (
    <div className="ppss-page">
      <AlliesHero />
      <AlliesIntro />
      <AlliesPrepaid />
      <AlliesPols />
      <AlliesConEmp />
      <AlliesRegEspcial />
      <AlliesCaja />
    </div>
  );
}

export default Ppss;