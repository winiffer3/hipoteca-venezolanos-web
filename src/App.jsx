import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

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
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
