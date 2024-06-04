import React, {useRef, useState, useEffect} from 'react'
import { useThree, useFrame,  } from '@react-three/fiber'

import { useScroll } from '@react-three/drei'
import wobbleVertex from '../Shaders/WobblySphereShaders/vertex.glsl'
import wobbleFragment from '../Shaders/WobblySphereShaders/fragment.glsl'

import * as THREE from 'three'
import WSCustomShaderMaterial from './WSCustomShaderMaterial'

import CustomShaderMaterial from 'three-custom-shader-material'


const Wsphere = () => {
    const meshRef = useRef()
    const materialRef = useRef()
    const {size, viewport, camera} = useThree()
    const scroll = useScroll()

    // const depthMaterial = new CustomShaderMaterial({
    //     baseMaterial: THREE.MeshPhysicalMaterial,
    //     vertexShader: wobbleVertex,
    //     silent: true,

    //     //MeshDepthMaterial
    //     // depthPacking: THREE.RGBADepthPacking
    // })


    useFrame(()=>{
        const offset = scroll.offset

        if (meshRef.current) {
            meshRef.current.position.y = (-offset * viewport.height) * 4

        }

        if (materialRef.current) {
            materialRef.current.uniforms.uScrollY.value = offset;
            
        }
    })
  


    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry attach="geometry"  args={[2.5, 50]} computeTangents={true}/>
            {/* <WSCustomShaderMaterial ref={materialRef} /> */}
            <CustomShaderMaterial 
                baseMaterial={new THREE.MeshPhysicalMaterial}
                silent


            />
        </mesh>
    )
}

export default Wsphere