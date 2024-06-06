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
        <section className="section">About</section>
        <section className="section">Skills</section>
        <section className="section">Projects</section>
        <section className="section">Experience</section>
        <section className="section">Contact </section>
      </Scroll>
    </>
  )
}

export default About