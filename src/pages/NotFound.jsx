import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="notfound">
      <div id="notfound-content">
        <span id="notfound-code">404</span>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
        <Link to="/" id="notfound-btn">Volver al inicio</Link>
      </div>
    </main>
  )
}