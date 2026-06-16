import Calculator from '../components/Calculator'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className='page-hero-overlay' />
        <div className='page-hero-content'>
          <div id="hero-badge">🇻🇪 Especialistas hipotecarios para venezolanos en España 🇻🇪</div>
          <h1>Tu casa en España,<br />
            <span>sin vueltas y en tu idioma</span>
          </h1>
          <p>Sabemos lo que es llegar de Venezuela y empezar de cero. 
            Te ayudamos a conseguir tu hipoteca en España.
          </p>
          <div id="hero-btns">
            <a href="#calculadora" id="btn-primary">Calcula tu cuota</a>
            <a href="#como-funciona" id="btn-secondary">Ver cómo funciona</a>
          </div>
          <span id="hero-note">Consulta gratuita · Sin compromiso · Respondemos hoy</span>
        </div>
      </section>
      {/* BANDA DE CONFIANZA */}
      <div className="trust-band">
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
        <h2 className="section-title">Sabemos los obstáculos que enfrentas</h2>
        <p className="section-sub">Porque los hemos resuelto cientos de veces</p>
        <div id="pain-grid">
          <div className="pain-card card-hover">
            <span className="pain-icon">📅</span>
            <h3 className="card-title">Poco tiempo en España</h3>
            <p className="card-text">Sabemos qué bancos aprueban con menos de 2 años de residencia.</p>
          </div>
          <div className="pain-card card-hover">
            <span className="pain-icon">💰</span>
            <h3 className="card-title">Ingresos recientes</h3>
            <p className="card-text">Trabajamos con bancos que aceptan nóminas de menos de 1 año.</p>
          </div>
          <div className="pain-card card-hover">
            <span className="pain-icon">📋</span>
            <h3 className="card-title">Historial en Venezuela</h3>
            <p className="card-text">Entendemos tu situación crediticia y la explicamos bien al banco.</p>
          </div>
          <div className="pain-card card-hover">
            <span className="pain-icon card-icon" >🌍</span>
            <h3 className="card-title">No comunitario</h3>
            <p className="card-text">Conocemos exactamente qué bancos trabajan con extracomunitarios.</p>
          </div>
        </div>
      </section>
      {/* PASOS DEL PROCESO */}
      <section id="como-funciona">
        <h2 className="section-title">Así de simple es el proceso</h2>
        <p className="section-sub">Tú vives tu vida, nosotros hacemos el trabajo</p>
        <div id="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h3>Nos cuentas tu situación</h3>
              <p>Por WhatsApp, teléfono o email. Sin formularios interminables. 15 minutos y ya sabemos cómo ayudarte.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h3>Analizamos tu perfil</h3>
              <p>Revisamos tus ingresos, tiempo en España y documentación. Te decimos qué opciones tienes con total honestidad.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h3>Negociamos con los bancos</h3>
              <p>Presentamos tu caso a los bancos más adecuados para tu perfil. Conseguimos las mejores condiciones.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h3>Firma y llaves 🔑</h3>
              <p>Te acompañamos hasta el notario y resolvemos cualquier duda de último momento.</p>
            </div>
          </div>
        </div>
      </section>
      <Calculator />
      {/* TESTIMONIOS */}
      <section id="testimonios">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-sub">Personas que confiaron en nosotros</p>
        <div id="testi-grid">
          <div className="testi-card">
            <div className="testi-top">
              <div className="avatar" id='avatar-uno'>RD</div>
              <div>
                <div className="testi-name">Roberto D.</div>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Han llevado mi caso, un tanto especial, con mucha profesionalidad. Me están ayudando a llevarlo lo mejor posible y buscando todas las facilidades."</p>
          </div>
          <div className="testi-card">
            <div className="testi-top">
              <div className="avatar" id='avatar-dos'>RM</div>
              <div>
                <div className="testi-name">Rafael M.</div>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Sin ellos no hubiera sido posible alcanzar la hipoteca que me han concedido. Los recomiendo para encontrar hipoteca en las mejores condiciones."</p>
          </div>
          <div className="testi-card">
            <div className="testi-top">
              <div className="avatar" id='avatar-tres'>BR</div>
              <div>
                <div className="testi-name">Boris R.</div>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="testi-text">"Excelentes profesionales, te acompañan en todo el proceso hasta el final. Siempre buscando las mejores condiciones del mercado. Salió perfectamente la operación."</p>
          </div>
        </div>
      </section>
      <FAQ />
      {/* CTA FINAL */}
      <section id="cta-final">
        <h2>¿Listo para tener tu casa?</h2>
        <p>Habla hoy con un asesor que entiende tu situación.<br />
          Sin rodeos, sin tecnicismos, en tu idioma.
        </p>
        <div id="cta-btns">
          <a href="https://wa.me/34609452314" id="btn-whatsapp">
            <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
            Escríbenos por WhatsApp
          </a>
          <a href="tel:+34910605055" id="btn-llamar">
            📞 910 605 055
          </a>
        </div>
        <span id="cta-note">Consulta gratuita · Sin compromiso · Respondemos hoy</span>
      </section>
    </main>
  )
}