import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import TestMesh from './Meshes/TestMesh'
import * as THREE from 'three'

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
        <TestMesh />

    </Canvas>
    )
}

export default Scene