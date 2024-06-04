import About from '../Sections/About'
import Skills from '../Sections/Skills'
import Projects from '../Sections/Projects'
import Experience from '../Sections/Experience'
import Contact from '../Sections/Contact'
import Wsphere from './Meshes/About/WobblySphereMesh/Wsphere'


import React, {useEffect} from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import TestMesh from './Meshes/Test/TestMesh'
import * as THREE from 'three'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'


// const CameraSetup = () => {
//     const {camera, size} = useThree()

//     useEffect(()=> {
//         // camera.fov = 35
//         // camera.aspect = size.width/ size.height
//         // camera.near = 0.1
//         // camera.far = 100
//         // camera.position.set(13, -3, -5)
//         camera.updateProjectionMatrix()
//     }, [camera, size])
// }

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
        {/* <CameraSetup /> */}
        <directionalLight 
            castShadow = {true}
            shadow-mapSize-width = {1024}
            shadow-mapSize-height = {1024}
            shadow-camera-far = {15}
            shadow-normalBias = {0.05}
            position={[5, 10, 5]}
            intensity={3}
        />
        <ambientLight intensity={0.5} />
        <ScrollControls pages={5} >
            <Scroll>
                <Wsphere />
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