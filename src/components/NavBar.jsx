import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <div id="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contacto" id="nav-cta">Consulta gratis</Link>
      </div>
    </nav>
  )
}