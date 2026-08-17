import Especialidad1Icon from "../../assets/Iconos/Especialidad1.png";
import Especialidad2Icon from "../../assets/Iconos/Especialidad2.png";
import Especialidad3Icon from "../../assets/Iconos/Resonancia.png";
import Especialidad4Icon from "../../assets/Iconos/Especialidad4.png";
import Especialidad5Icon from "../../assets/Iconos/Especialidad5.png";
import Especialidad6Icon from "../../assets/Iconos/Especialidad6.png";
import Especialidad7Icon from "../../assets/Iconos/Especialidad7.png";


const specialties = [
  { 
    id: 1, 
    title: "Rayos X", 
    icon: Especialidad1Icon, 
    desc: "Imágenes digitales rápidas con mínima radiación para evaluar huesos y tórax." 
  },
  { 
    id: 2, 
    title: "Intervencionismo", 
    icon: Especialidad2Icon, 
    desc: "Procedimientos mínimamente invasivos guiados por imagen para una rápida recuperación." 
  },
  { 
    id: 3, 
    title: "Tomografía Computarizada", 
    icon: Especialidad3Icon, 
    desc: "Evaluación detallada por secciones para un diagnóstico rápido y claro." 
  },
  { 
    id: 4, 
    title: "Tomografía Multicorte", 
    icon: Especialidad4Icon, 
    desc: "Escaneo ultra rápido con reconstrucción 3D para casos complejos." 
  },
  { 
    id: 5, 
    title: "Resonancia Simple y Contrastada", 
    icon: Especialidad5Icon, 
    desc: "Diagnóstico profundo sin radiación para evaluar cerebro, columna y articulaciones." 
  },
  { 
    id: 6, 
    title: "Resonancias Especiales", 
    icon: Especialidad6Icon, 
    desc: "Protocolos avanzados de alta precisión para estudios cardíacos, vasculares y complejos." 
  },
  { 
    id: 7, 
    title: "Doppler Vascular", 
    icon: Especialidad7Icon, 
    desc: "Ultrasonido a color no invasivo para examinar la circulación en arterias y venas." 
  },
];

function SpecialtiesGrid() {
  return (
    <section className="specialties" id="especialidad">
      <div className="specialties__container">

        {/* HEADER */}
        <div className="specialties__header">
          <h2 className="specialties__title">
            Nuestras <span className="text-gradient-blue">Especialidades</span>
          </h2>

          <p className="specialties__description">
            Áreas médicas especializadas con tecnología de vanguardia para brindarte diagnósticos ágiles, precisos y seguros en un solo lugar.
          </p>
        </div>

        {/* GRID */}
        <div className="specialties__grid">
          {specialties.map((item) => (
            <article key={item.id} className="specialty-card">

              <div className="specialty-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialtiesGrid;