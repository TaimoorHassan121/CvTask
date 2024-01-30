import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Experties from './Components/Experties'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Experience from './Components/Experience'
import ContectMe from './Components/Contactme'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Portfolio />
    <Experties />
    <Projects />
    <Skills />
    <Education />
    <Experience />
    <ContectMe />
    <Footer />
    </>
  )
}

export default App
