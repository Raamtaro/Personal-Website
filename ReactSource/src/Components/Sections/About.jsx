import React from 'react'
import { Scroll } from '@react-three/drei'
import Wsphere from '../ThreeExperience/Meshes/About/WobblySphereMesh/Wsphere'

function About() {
  return (
    <>
      <Scroll>
        <Wsphere />
      </Scroll>
      <Scroll html style={{width: '100%'}} >
        <section className="section AboutOne">Hey, I'm Raam!</section>
        <section className="section AboutTwo">Some intro text</section>
        <section className="section AboutThree">Some text about my education</section>
        <section className="section AboutFour">Some text about my intentions as a developer </section>
        <section className="section AboutFive">Some text about my personal self such as hobbies </section>
      </Scroll>
    </>
  )
}

export default About