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
    </main>
  )
}