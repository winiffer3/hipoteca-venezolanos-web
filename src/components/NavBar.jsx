import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) => isActive ? 'nav-active' : ''

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
        <NavLink to="/" end onClick={() => setMenuOpen(false)} className={linkClass}>Inicio</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClass}>Nosotros</NavLink>
        <NavLink to="/servicios" onClick={() => setMenuOpen(false)} className={linkClass}>Servicios</NavLink>
        <NavLink to="/contacto" onClick={() => setMenuOpen(false)} id="nav-cta">
          Consulta gratis
        </NavLink>
      </div>
    </nav>
  )
}