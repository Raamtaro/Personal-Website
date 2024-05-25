import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const Scene = () => {
  return (
   <Canvas 
        style={{position: 'fixed'}}
        dpr= { [1, 2] } //default value, but adding for my own sanity
        gl = { {
            antialias: true,
            alpha: true,
            
        }}
   >
    <mesh>
        <planeGeometry />
    </mesh>

   </Canvas>
  )
}

export default Scene