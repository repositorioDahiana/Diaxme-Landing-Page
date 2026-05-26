function ApplySection() {
  return (
    <section className="apply" id="postular">
      <div className="apply__container">

        {/* HEADER CENTRADO */}
        <div className="apply__header">
          <span className="apply__badge">Postúlate</span>

          <h2 className="apply__title">
            Envíanos tu <span className="text-gradient-blue">Hoja de Vida</span>
          </h2>

          <p className="apply__description">
            Completa el formulario y nos pondremos en contacto contigo si tu perfil se ajusta a nuestras necesidades actuales.
          </p>
        </div>

        {/* FORM CENTRADO */}
        <form className="apply__form">

          <div className="apply__grid">

            <div className="apply__field">
              <label>Nombre *</label>
              <input type="text" placeholder="Tu nombre" />
            </div>

            <div className="apply__field">
              <label>Apellido *</label>
              <input type="text" placeholder="Tu apellido" />
            </div>

            <div className="apply__field">
              <label>Email *</label>
              <input type="email" placeholder="correo@ejemplo.com" />
            </div>

            <div className="apply__field">
              <label>Teléfono *</label>
              <input type="text" placeholder="300 000 0000" />
            </div>

            <div className="apply__field">
              <label>Profesión *</label>
              <input type="text" placeholder="Ej: Tecnólogo en Radiología" />
            </div>

            <div className="apply__field">
              <label>Perfil de Linkedin</label>
              <input type="text" placeholder="Ej: https://co.linkedin.com/" />
            </div>

        </div>


          <div className="apply__field">
            <label>Adjuntar Hoja de Vida*</label>
            <input type="file" />
            <small>PDF, DOC, DOCX — máx. 5MB</small>
          </div>

          <div className="apply__checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              Acepto la política de tratamiento de datos personales de Radiólogos Asociados.
            </label>
          </div>

          <button type="submit" className="btn-base btn-primary-blue">
            Enviar postulación
          </button>

        </form>

      </div>
    </section>
  );
}

export default ApplySection;