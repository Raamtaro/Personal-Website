import React, {useRef, useState, useEffect, useMemo} from 'react'
import { useThree, useFrame,  } from '@react-three/fiber'

import { useScroll } from '@react-three/drei'
import wobbleVertex from '../Shaders/WobblySphereShaders/vertex.glsl'
import wobbleFragment from '../Shaders/WobblySphereShaders/fragment.glsl'

import * as THREE from 'three'


import CustomShaderMaterial from 'three-custom-shader-material/vanilla'


const Wsphere = () => {
    const meshRef = useRef()
    const materialRef = useRef()
    const {size, viewport, camera} = useThree()
    const scroll = useScroll()

    const material = useMemo(() => new CustomShaderMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: wobbleVertex,
        fragmentShader: wobbleFragment,
        silent: true,
        uniforms: {
            uTime: { value: 0 },
            uScrollY: { value: 0 },
        },
        metalness: 0,
        roughness: 0.5,
        color: '#ffffff',
        transmission: 0,
        ior: 1.5,
        thickness: 1.5,
        transparent: true,
        wireframe: false
    }), [])

    const depthMaterial = useMemo(() => new CustomShaderMaterial({
        baseMaterial: THREE.MeshDepthMaterial,
        vertexShader: wobbleVertex,
        // fragmentShader: wobbleFragment,
        depthPacking: THREE.RGBADepthPacking,
        silent: true,
        uniforms: {
            uTime: { value: 0 },
            uScrollY: { value: 0 },
        }
    }), [])




    useFrame(({clock})=>{
        const offset = scroll.offset

        if (meshRef.current) {
            meshRef.current.position.y = (-offset * viewport.height) * 4

        }

        if (materialRef.current) {
            materialRef.current.uniforms.uScrollY.value = offset;
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            
        }
    })
  






    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry attach="geometry"  args={[2.5, 50]} computeTangents={true}/>
            
            {/* <CustomShaderMaterial 
                baseMaterial={new THREE.MeshPhysicalMaterial}
                silent


            /> */}
            {/* Decided to use below approach instead of the React integration because there's I want to provide depthPacking */}
            <primitive object={material} ref={materialRef} attach="material" />
            <primitive object={depthMaterial} attach="depthMaterial" />
        </mesh>
    )
}

export default Wsphere