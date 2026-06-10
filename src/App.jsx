import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import Servicios from './pages/Servicios'
import Privacidad from './pages/Privacidad'

function App() {

  return (
    <>
     <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*"         element={<NotFound />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
