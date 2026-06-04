import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <header>
    <Link to="/">
    <img id="header-logo"src="../images/logo2.svg" alt="Hipoteca Venezolanos"/>
    </Link>
  </header>
  )
}