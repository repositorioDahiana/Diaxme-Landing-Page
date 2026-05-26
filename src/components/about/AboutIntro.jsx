import experienciaIcon from "../../assets/Iconos/email.png";
import pacientesIcon from "../../assets/Iconos/email.png";
import sedesIcon from "../../assets/Iconos/email.png";
import empresasIcon from "../../assets/Iconos/email.png";

function AboutIntro() {
  return (
    <section className="about-intro">

      {/* FRASE */}
      <div className="about-intro__quote">
        <p>
          “”
        </p>
      </div>

      {/* STATS */}
      <div className="about-intro__stats">

        <div className="about-intro__card">
          <img src={experienciaIcon} />
          <h3>+12</h3>
          <span>Años de experiencia</span>
        </div>

        <div className="about-intro__card">
          <img src={pacientesIcon} />
          <h3>+300K</h3>
          <span>Pacientes atendidos</span>
        </div>

        <div className="about-intro__card">
          <img src={sedesIcon} />
          <h3>+2</h3>
          <span>Sedes en Colombia</span>
        </div>

        <div className="about-intro__card">
          <img src={empresasIcon} />
          <h3>3</h3>
          <span>Empresas del grupo</span>
        </div>

      </div>

    </section>
  );
}

export default AboutIntro;