import About from './Components/Sections/About'
import Skills from './Components/Sections/Skills'
import Projects from './Components/Sections/Projects'
import Experience from './Components/Sections/Experience'
import Contact from './Components/Sections/Contact'
import SectionNav from './Components/NavBar/SectionNav'

import Scene from './Components/ThreeExperience/Scene'


import './App.css'

import { useEffect } from 'react'

function App() {
  


  // const [count, setCount] = useState(0)


  return (

    <>
      <SectionNav />
      <Scene />
    </>
  )
}

export default App
