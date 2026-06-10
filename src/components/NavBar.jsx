import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span /><span /><span />
      </button>
      <div id="nav-links" className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link>
        <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
        <Link to="/contacto" onClick={() => setMenuOpen(false)} id="nav-cta">
          Consulta gratis
        </Link>
      </div>
    </nav>
  )
}