import { useState } from "react";
import { Link } from "react-router-dom";
import logoDiaxme from "../../assets/Iconos/logo-diaxme.png";
import resonanciaIcon from "../../assets/Iconos/Resonancia.png";

function MainMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenu(null);
  };

  return (
    <nav className="main-navbar">
      <div className="max-w-full mx-auto flex items-center justify-between px-6">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src={logoDiaxme}
            className="h-14"
            alt="Logo Diaxme"
          />
        </Link>

        <button
          className="menu-toggle md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`menu-items ${menuOpen ? "menu-open" : ""}`}>

          <li onClick={closeMenu}>
            <Link to="/">Inicio</Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("servicios")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <Link to="/services" onClick={(e) => handleDropdownClick(e, "servicios")}>Servicios</Link>
            <ul className={`submenu ${submenu === "servicios" ? "show" : ""}`}>
              <li onClick={closeMenu}>
                <Link to="/services360">Programas 360</Link>
              </li>
            </ul>
          </li>

          <li onClick={closeMenu}>
            <Link to="/specialists">Especialistas</Link>
          </li>

          <li onClick={closeMenu}>
            <Link to="/location">Sedes</Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("aliados")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <Link to="/allies" onClick={closeMenu}>
              Convenios
            </Link>
            <ul className={`submenu ${submenu === "aliados" ? "show" : ""}`}>
              <li onClick={closeMenu}>
                <Link to="/allies#medicinaprepagada">Medicina Prepagada</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/allies#polizas">Pólizas</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/allies#convenioempre">Convenios Empresas</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/allies#regimenEsp">Régimen Especial y EPS</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/allies#caja">Caja de Compensación</Link>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("paciente")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <span>Paciente</span>

            <ul className={`submenu ${submenu === "paciente" ? "show" : ""}`}>
              <li onClick={closeMenu}>
                <Link to="/patientrights">Derechos y Deberes</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/patientsecurity">Políticas de Seguridad</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/pqrs">PQRS</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/ppss">PPSS</Link>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("quienes")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <Link to="/about" onClick={closeMenu}>
              Quiénes Somos
            </Link>

            <ul className={`submenu ${submenu === "quienes" ? "show" : ""}`}>
              <li onClick={closeMenu}>
                <Link to="/company">Nuestra Empresa</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/careers">Trabaje con Nosotros</Link>
              </li>
            </ul>
          </li>     

          <li onClick={closeMenu}>
            <a
              href="https://wa.me/573174042064?text=Hola,%20deseo%20agendar%20una%20cita%20como%20Usuario%20Particular"
              target="_blank"
              rel="noopener noreferrer"
              className="agenda-btn"
            >
              <img src={resonanciaIcon} alt="Agendar cita" />
              Usuario Particular
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;