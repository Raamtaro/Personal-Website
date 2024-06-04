import React, {useMemo, forwardRef, useEffect, useState, useRef} from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import wobbleVertex from '../Shaders/WobblySphereShaders/vertex.glsl'
import wobbleFragment from '../Shaders/WobblySphereShaders/fragment.glsl'

import CustomShaderMaterial from 'three-custom-shader-material/vanilla'

const WSCustomShaderMaterial = forwardRef((props, ref) => {
    useFrame(({ clock }) => {
        
        if (ref.current) {
            ref.current.uniforms.uTime.value = clock.getElapsedTime()
            
        }
    })

    const shaderMaterial = useMemo(()=> { new CustomShaderMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: wobbleVertex,
        fragmentShader: wobbleFragment,
        silent: true,

        // MeshPhysicalMaterial
        metalness: 1.0,
        roughness: 0.0,
        color: '#ffffff',
        transmission: 0,
        ior: 1.5,
        thickness: 1.5,
        transparent: true,
        wireframe: false

        })
    
    }, [])
    return <primitive object={shaderMaterial} ref={ref} attach="material"/>
})

// extend({WSCustomShaderMaterial})

export default WSCustomShaderMaterial