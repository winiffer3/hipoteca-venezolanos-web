export default function Servicios() {
  return (
    <main>
      <section id="servicios-hero">
        <div id="servicios-overlay" />
        <div id="servicios-content">
          <h1>Nuestros <span>Servicios</span></h1>
          <p>Soluciones financieras a medida para la comunidad venezolana en España</p>
        </div>
      </section>
      <div id="servicios-band">
        <div className="band-item"><span>🏦</span> +45 entidades bancarias</div>
        <div className="band-item"><span>✅</span> Estudio gratuito sin compromiso</div>
        <div className="band-item"><span>⚡</span> Respuesta en 24h</div>
        <div className="band-item"><span>📋</span> Gestionamos todo el papeleo</div>
      </div>
      <section id="servicios-grid">
        <div className="servicio-card">
          <span className="servicio-icon">🏠</span>
          <h2>Préstamos hipotecarios</h2>
          <p>Te ayudamos a conseguir las mejores condiciones para comprar tu vivienda en España, aunque seas no comunitario o lleves poco tiempo aquí.</p>
        </div>
        <div className="servicio-card">
          <span className="servicio-icon">🔄</span>
          <h2>Cambios de hipoteca y subrogaciones</h2>
          <p>¿Ya tienes hipoteca pero pagas demasiado? Conseguimos reducir tu cuota actual y aminorar tu carga financiera mensual.</p>
        </div>
        <div className="servicio-card">
          <span className="servicio-icon">💼</span>
          <h2>Préstamos personales</h2>
          <p>Te damos una solución idónea, profesional y rápida para cualquier tipo de financiación según tu situación específica.</p>
        </div>
        <div className="servicio-card">
          <span className="servicio-icon">🤝</span>
          <h2>Reunificación de deudas</h2>
          <p>Logramos la mejor solución a medida de tus necesidades, unificando tus deudas en una sola cuota más cómoda.</p>
        </div>
      </section>
    </main>
  )
}