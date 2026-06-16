export default function About() {
  return (
    <main>

      {/* HERO */}
      <section id="about-hero" className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1>Sobre <span>Nosotros</span></h1>
          <p>Asesores independientes especializados en hipotecas para venezolanos en España</p>
        </div>
      </section>
      <div className="trust-band">
        <div className="band-item"><span>🏦</span> +45 entidades bancarias</div>
        <div className="band-item"><span>🤝</span> Trato personalizado</div>
        <div className="band-item"><span>⏱️</span> Respuesta en 24h</div>
        <div className="band-item"><span>✅</span> Estudio gratuito</div>
      </div>

      {/* QUIENES SOMOS */}
      <section id="about-intro">
        <h2>¿Quiénes somos?</h2>
        <p>Somos un grupo de asesores profesionales independientes, especializados en el asesoramiento financiero hipotecario.</p>
        <p>Estamos dedicados a proporcionar servicios de la más alta calidad. Contamos con un equipo de profesionales con amplia experiencia en el sector financiero y con amplio conocimiento del mercado hipotecario español.</p>
      </section>

      {/* VALORES */}
      <section id="about-valores">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <p className="section-sub">Lo que nos hace diferentes</p>
        <div id="valores-grid">
          <div className="valor-card card-hover">
            <span className="valor-icon">🏦</span>
            <h3 className="card-title">+45 entidades bancarias</h3>
            <p className="card-text">Trabajamos con más de 45 bancos para encontrar la mejor opción para tu perfil.</p>
          </div>
          <div className="valor-card card-hover">
            <span className="valor-icon">🤝</span>
            <h3 className="card-title">Trato personalizado</h3>
            <p className="card-text">Cada cliente es único. Analizamos tu caso en detalle y buscamos la solución más adecuada.</p>
          </div>
          <div className="valor-card card-hover">
            <span className="valor-icon">🇻🇪</span>
            <h3 className="card-title">Entendemos tu situación</h3>
            <p className="card-text">Conocemos los retos específicos de los venezolanos en España y sabemos cómo resolverlos.</p>
          </div>
          <div className="valor-card card-hover">
            <span className="valor-icon card-icon">⏱️</span>
            <h3 className="card-title">Ahorro de tiempo</h3>
            <p className="card-text">Nosotros buscamos entre todos los bancos por ti. Tú solo firmas cuando todo esté listo.</p>
          </div>
        </div>
      </section>

      {/* EL EQUIPO */}
      <section id="about-equipo">
        <h2>El equipo</h2>
        <p>Gracias a nuestro equipo somos capaces de responder a las expectativas de nuestros clientes de forma rápida y eficaz, estableciendo una relación basada en la confianza y en una estrecha colaboración.</p>
      </section>

    </main>
  )
}
