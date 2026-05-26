import peticionIcon from "../../assets/Iconos/email.png";
import quejaIcon from "../../assets/Iconos/email.png";
import reclamoIcon from "../../assets/Iconos/email.png";
import sugerenciaIcon from "../../assets/Iconos/email.png";
import felicitacionIcon from "../../assets/Iconos/email.png";
import { useState } from "react";

function PQRSForm() {

    const [selectedType, setSelectedType] = useState("Petición");

    const [formData, setFormData] = useState({
        lugarAtencion: "",
        });

        const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        };

  return (
    <section className="pqrs-form">

      <div className="pqrs-form__container">

        {/* HEADER */}
        <div className="pqrs-form__header">

          <h2 className="pqrs-form__title">
            Cuéntanos tu <span className="text-gradient-blue">experiencia</span>
          </h2>

          <p className="pqrs-form__description">
            Completa el siguiente formulario con los datos de tu solicitud.
            Todos los campos marcados con * son obligatorios.
          </p>

        </div>

        {/* CARD */}
        <div className="pqrs-form__card">

          {/* TIPOS */}
          <div className="pqrs-form__section">

            <label className="pqrs-form__label">
              Tipo de solicitud *
            </label>

            <div className="pqrs-form__types">

                <button
                    className={`pqrs-form__type ${
                    selectedType === "Petición" ? "active" : ""
                    }`}
                    onClick={() => setSelectedType("Petición")}
                    type="button"
                >
                    <img src={peticionIcon} alt="Petición" />
                    <span>Petición</span>
                </button>

                <button
                    className={`pqrs-form__type ${
                    selectedType === "Queja" ? "active" : ""
                    }`}
                    onClick={() => setSelectedType("Queja")}
                    type="button"
                >
                    <img src={quejaIcon} alt="Queja" />
                    <span>Queja</span>
                </button>

                <button
                    className={`pqrs-form__type ${
                    selectedType === "Reclamo" ? "active" : ""
                    }`}
                    onClick={() => setSelectedType("Reclamo")}
                    type="button"
                >
                    <img src={reclamoIcon} alt="Reclamo" />
                    <span>Reclamo</span>
                </button>

                <button
                    className={`pqrs-form__type ${
                    selectedType === "Sugerencia" ? "active" : ""
                    }`}
                    onClick={() => setSelectedType("Sugerencia")}
                    type="button"
                >
                    <img src={sugerenciaIcon} alt="Sugerencia" />
                    <span>Sugerencia</span>
                </button>

                <button
                    className={`pqrs-form__type ${
                    selectedType === "Felicitaciones" ? "active" : ""
                    }`}
                    onClick={() => setSelectedType("Felicitaciones")}
                    type="button"
                >
                    <img src={felicitacionIcon} alt="Felicitaciones" />
                    <span>Felicitaciones</span>
                </button>

                </div>

          </div>

          {/* FORM */}
          <div className="pqrs-form__grid">

            {/* LUGAR DE ATENCIÓN */}
            <div className="pqrs-form__group">
            <label>
                Lugar de atención <span>*</span>
            </label>

            <select
                name="lugarAtencion"
                value={formData.lugarAtencion}
                onChange={handleChange}
                required
            >
                <option value="">
                Selecciona una sede
                </option>

                <option value="los-rosales">
                Radiólogos Asociados Sede Clínica Los Rosales —
                Avenida Circunvalar No. 3-01 Torre B Piso 2
                </option>

                <option value="comfamiliar">
                Radiólogos Asociados Sede Clínica Comfamiliar —
                Avenida Circunvalar No. 3-01 Torre B Piso 2
                </option>

                <option value="san-rafael">
                Radiólogos Asociados Sede Clínica San Rafael Megacentro —
                Carrera 19 No. 12-32 Primer piso
                </option>

                <option value="corazon">
                Radiólogos Asociados Sede Centro Médico para el Corazón —
                Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales
                </option>

                <option value="megacentro-pinares">
                Radiólogos Asociados Sede Megacentro Pinares —
                Carrera 18 No. 12-75 Torre 2 Local 208
                </option>

                <option value="mujer">
                Radiólogos Asociados Sede Centro Médico De La Mujer —
                Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales
                </option>

                <option value="san-joaquin">
                Radiólogos Asociados Sede ESE San Joaquín —
                Carrera 26 No. 78-80 Barrio Cuba
                </option>

                <option value="salud-centro">
                Radiólogos Asociados Sede ESE Salud del Centro —
                Carrera 7 No. 40-34
                </option>

                <option value="cartago">
                Radiólogos Asociados Sede Cartago Centro —
                Carrera 5 No. 7-88
                </option>

                <option value="mariscal">
                Radiólogos Asociados Sede Mariscal —
                Carrera 5 No. 8-55
                </option>

                <option value="armenia">
                Radiólogos Asociados Sede Armenia —
                Carrera 12 1A norte-20 local 101-102
                </option>

            </select>
            </div>

            <div className="pqrs-form__group">
              <label>Procedimiento realizado *</label>

              <select>
                <option></option>
              </select>
            </div>

            <div className="pqrs-form__group">
              <label>Quien interpone la petición *</label>

              <select>
                <option> Selecciona una opción </option>
                <option>Acompañante</option>
                <option>EPS</option>
                <option>Usuario</option>
                <option>Super Salud</option>
              </select>
            </div>

            <div className="pqrs-form__group">
              <label>Fecha del evento *</label>

              <input type="date" />
            </div>

            <div className="pqrs-form__group">
              <label>Nombre *</label>

              <input
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Apellido *</label>

              <input
                type="text"
                placeholder="Ingresa tu apellido"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Documento de Identificación</label>

              <input
                type="text"
                placeholder="Número de cédula"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Dirección de residencia</label>

              <input
                type="text"
                placeholder="Dirección completa"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Correo electrónico *</label>

              <input
                type="email"
                placeholder="tu@email.com"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Teléfono fijo</label>

              <input
                type="text"
                placeholder="(606) XXX XXXX"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Teléfono celular *</label>

              <input
                type="text"
                placeholder="3XX XXX XXXX"
              />
            </div>

            <div className="pqrs-form__group">
              <label>Entidad *</label>
              <select>
                <option> Selecciona una opción </option>
                <option>EPS</option>
                <option>Medicina Prepagada</option>
                <option>Régimen especial</option>
                <option>SOAT</option>
              </select>
            </div>

            <div className="pqrs-form__group full">
              <label>Nombre del Funcionario</label>

              <input
                type="text"
                placeholder="Ej: Andres Ramirez"
              />
            </div>

            <div className="pqrs-form__group full">
              <label>
                Escribe aquí tu petición, queja, reclamo,
                sugerencia o felicitación *
              </label>

              <textarea
                rows="6"
                maxLength="500"
                placeholder="Describe con detalle tu solicitud..."
              ></textarea>

              <span className="pqrs-form__helper">
                Máximo 500 caracteres
              </span>
            </div>

          </div>

          {/* CHECK */}
          <div className="pqrs-form__check">

            <input type="checkbox" id="datos" />

            <label htmlFor="datos">
              Acepto la política y tratamiento de datos personales
            </label>

          </div>

          {/* BUTTONS */}
          <div className="pqrs-form__actions">

            <button className="btn-base btn-primary-blue">
              Enviar PQRS
            </button>

            <button className="btn-base pqrs-form__secondary">
              Limpiar formulario
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PQRSForm;