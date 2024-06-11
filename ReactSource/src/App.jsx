import React from 'react'
import Home from './Components/Sections/Home/Home'
import About from './Components/Sections/About/About'
import Skills from './Components/Sections/Skills/Skills'
import Projects from './Components/Sections/Projects/Projects'
import Contact from './Components/Sections/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
    {/* <main> */}
      <header className='home'>
        <Home />
      </header>
      <main>
        <About />
        <Skills />
        {/* <Projects />
        <Contact /> */}
      </main>
    {/* </main> */}
    </>
  )
}

export default App
