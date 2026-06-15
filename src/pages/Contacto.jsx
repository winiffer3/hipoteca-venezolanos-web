import { useState } from 'react'

export default function Contacto() {
  const [terms, setTerms] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [errores, setErrores] = useState({})
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (form.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!form.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevosErrores.email = 'Introduce un email válido'
    }

    if (form.telefono && !/^[+\d\s]{7,15}$/.test(form.telefono)) {
      nuevosErrores.telefono = 'Introduce un teléfono válido'
    }

    if (!form.servicio) {
      nuevosErrores.servicio = 'Selecciona un servicio'
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'Cuéntanos tu situación para poder ayudarte'
    } else if (form.mensaje.trim().length < 20) {
      nuevosErrores.mensaje = 'Por favor añade un poco más de detalle (mínimo 20 caracteres)'
    }

    if (!terms) {
      nuevosErrores.terms = 'Debes aceptar la Política de Privacidad para continuar'
    }

    return nuevosErrores
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const erroresValidacion = validar()

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }

    setEnviando(true)
    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => data.append(key, value))

    const response = await fetch('https://formspree.io/f/mojznkek', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      setEnviado(true)
    } else {
      setErrores({ general: 'Hubo un error al enviar. Inténtalo de nuevo o llámanos directamente.' })
    }
    setEnviando(false)
  }

  return (
    <main>

      {/* HERO */}
      <section id="contacto-hero">
        <div id="contacto-overlay" />
        <div id="contacto-content">
          <h1>Contacta con <span>Nosotros</span></h1>
          <p>Cuéntanos tu situación y te respondemos hoy mismo</p>
        </div>
      </section>

      {/* BANDA */}
      <div id="contacto-band">
        <div className="band-item"><span>⏱️</span> Respuesta en 24h</div>
        <div className="band-item"><span>✅</span> Consulta gratuita</div>
        <div className="band-item"><span>📞</span> 910 605 055</div>
        <div className="band-item"><span>📍</span> Madrid, Paseo de la Infanta Isabel 27</div>
      </div>

      {/* CONTENIDO */}
      <section id="contacto-grid">

        {/* INFO */}
        <div id="contacto-info">
          <h2>Otras formas de contacto</h2>
          <div id="contacto-items">
            <a href="https://wa.me/34609452314" className="contacto-item contacto-whatsapp">
              <img src="/images/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
              WhatsApp — respuesta inmediata
            </a>
            <a href="tel:+34910605055" className="contacto-item contacto-tel">
              📞 910 605 055
            </a>
            <a href="tel:+34609452314" className="contacto-item contacto-tel">
              📱 609 452 314
            </a>
            <a href="mailto:info@i-credit.es" className="contacto-item contacto-email">
              ✉️ info@i-credit.es
            </a>
          </div>

          <div id="contacto-horario">
            <h3>Horario de atención</h3>
            <p>Lunes a viernes: 9:00 – 18:00</p>
            <p>Viernes: 9:00 – 15:00</p>
            <p>Sábado y domingo: cerrado</p>
          </div>

          <div id="contacto-direccion">
            <h3>Visítanos</h3>
            <p>Paseo de la Infanta Isabel, 27</p>
            <p>1ª Planta exterior izquierda</p>
            <p>28014 — Madrid</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div id="contacto-form-wrap">
          {enviado ? (
            <div id="form-success">
              <span>✅</span>
              <h3>¡Mensaje recibido!</h3>
              <p>Te contactamos en menos de 24 horas. ¡Gracias por confiar en nosotros!</p>
            </div>
          ) : (
            <form id="contacto-form" onSubmit={handleSubmit} noValidate>

              {errores.general && (
                <div className="error-general">{errores.general}</div>
              )}

              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text" name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className={errores.nombre ? 'input-error' : ''}
                />
                {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email" name="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errores.email ? 'input-error' : ''}
                />
                {errores.email && <span className="error-msg">{errores.email}</span>}
              </div>

              <div className="form-group">
                <label>Teléfono / WhatsApp <span className="opcional">(opcional)</span></label>
                <input
                  type="tel" name="telefono"
                  placeholder="+34 600 000 000"
                  value={form.telefono}
                  onChange={handleChange}
                  className={errores.telefono ? 'input-error' : ''}
                />
                {errores.telefono && <span className="error-msg">{errores.telefono}</span>}
              </div>

              <div className="form-group">
                <label>¿En qué podemos ayudarte?</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className={errores.servicio ? 'input-error' : ''}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="hipoteca">Préstamo hipotecario</option>
                  <option value="subrogacion">Cambio de hipoteca / Subrogación</option>
                  <option value="personal">Préstamo personalizado</option>
                  <option value="reunificacion">Reunificación de deudas</option>
                </select>
                {errores.servicio && <span className="error-msg">{errores.servicio}</span>}
              </div>

              <div className="form-group">
                <label>Cuéntanos tu situación</label>
                <textarea
                  name="mensaje" rows="4"
                  placeholder="¿Cuánto tiempo llevas en España? ¿Tienes NIE? ¿Qué precio de piso buscas?"
                  value={form.mensaje}
                  onChange={handleChange}
                  className={errores.mensaje ? 'input-error' : ''}
                />
                {errores.mensaje && <span className="error-msg">{errores.mensaje}</span>}
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => {
                      setTerms(e.target.checked)
                      setErrores({ ...errores, terms: '' })
                    }}
                  />
                  He leído y acepto la{' '}
                  <a href="/privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                </label>
                {errores.terms && <span className="error-msg">{errores.terms}</span>}
              </div>

              <button type="submit" id="form-submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar consulta gratuita'}
              </button>

            </form>
          )}
        </div>

      </section>
    </main>
  )
}