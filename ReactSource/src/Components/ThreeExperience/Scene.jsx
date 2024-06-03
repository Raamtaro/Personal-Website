import About from '../Sections/About'
import Skills from '../Sections/Skills'
import Projects from '../Sections/Projects'
import Experience from '../Sections/Experience'
import Contact from '../Sections/Contact'

import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import TestMesh from './Meshes/Test/TestMesh'
import * as THREE from 'three'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'

const Scene = () => {
    // const { size, viewport } = useThree()

    return (
    <Canvas 
            style={{position: 'fixed'}}
            dpr= { [1, 2] } //default value, but adding for my own sanity
            gl = { {
                antialias: true,
                alpha: true,
                
            }}
    >
        <directionalLight 
            castShadow = {true}
            shadow-mapSize-width = {1024}
            shadow-mapSize-height = {1024}
            shadow-camera-far = {15}
            shadow-normalBias = {0.05}
        />
        <ScrollControls pages={5} >
            <Scroll>
                <TestMesh />
            </Scroll>
            <Scroll html style={{width: '100%'}}>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Scroll>
        </ScrollControls>

    </Canvas>
    )
}

export default Scene