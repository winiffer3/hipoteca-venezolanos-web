import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <span>🔒 Datos protegidos RGPD</span>
      <span>🏦 Asesores registrados Banco de España</span>
      <span>🌐 hipotecavenezolanos.com</span>
      <Link to="/privacidad" id="footer-privacidad">Política de privacidad</Link>
      <p id="footer-copy">© 2026 Hipoteca Venezolanos. Todos los derechos reservados.</p>
    </footer>
  )
}