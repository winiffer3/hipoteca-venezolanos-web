export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div id="hero-overlay" />
        <div id="hero-content">
          <div id="hero-badge">🇻🇪 Especialistas en venezolanos en España</div>
          <h1>Tu casa en España,<br />
            <span id="hero-accent">sin vueltas y en tu idioma</span>
          </h1>
          <p>Sabemos lo que es llegar de Venezuela y empezar de cero. Te ayudamos a
            conseguir tu hipoteca aunque seas no comunitario, tengas poco tiempo
            aquí o ingresos recientes.
          </p>
          <div id="hero-btns">
            <a href="#calcular" id="btn-primary">Calcula tu cuota</a>
            <a href="#como-funciona" id="btn-secondary">Ver cómo funciona</a>
          </div>
          <span id="hero-note">Consulta gratuita · Sin compromiso · Respondemos hoy</span>
        </div>
      </section>
      {/* BANDA DE CONFIANZA */}
      <div id="trust-band">
        <div className="band-item"><span>🛡️</span> Sin coste inicial</div>
        <div className="band-item"><span>⏱️</span> Respuesta en 24h</div>
        <div className="band-item"><span>💬</span> Atención por WhatsApp</div>
        <div className="band-item"><span>📄</span> Gestionamos todo el papeleo</div>
      </div>
      {/* ESTADÍSTICAS */}
      <section id="stats">
        <div className="stat-card">
          <span className="stat-num">+45</span>
          <span className="stat-label">entidades bancarias colaboradoras</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">100%</span>
          <span className="stat-label">gestión personalizada</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">0€</span>
          <span className="stat-label">coste del estudio inicial</span>
        </div>
      </section>
      {/* PAIN POINTS */}
      <section id="pain-points">
        <h2>Sabemos los obstáculos que enfrentas</h2>
        <p className="section-sub">Porque los hemos resuelto cientos de veces</p>
        <div id="pain-grid">
          <div className="pain-card">
            <span className="pain-icon">🪪</span>
            <h3>Poco tiempo en España</h3>
            <p>Sabemos qué bancos aprueban con menos de 2 años de residencia.</p>
          </div>
          <div className="pain-card">
            <span className="pain-icon">💰</span>
            <h3>Ingresos recientes</h3>
            <p>Trabajamos con bancos que aceptan nóminas de menos de 1 año.</p>
          </div>
          <div className="pain-card">
            <span className="pain-icon">📋</span>
            <h3>Historial en Venezuela</h3>
            <p>Entendemos tu situación crediticia y la explicamos bien al banco.</p>
          </div>
          <div className="pain-card">
            <span className="pain-icon">🌍</span>
            <h3>No comunitario</h3>
            <p>Conocemos exactamente qué bancos trabajan con extracomunitarios.</p>
          </div>
        </div>
      </section>
    </main>
  )
}