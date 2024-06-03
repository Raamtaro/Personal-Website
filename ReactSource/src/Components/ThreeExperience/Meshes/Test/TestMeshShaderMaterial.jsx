import React, {useMemo, forwardRef, useEffect, useState, useRef} from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import testVertex from './TestShaders/vertex.glsl'
import testFragment from './TestShaders/fragment.glsl'

const TestMeshShaderMaterial = forwardRef((props, ref)=> {

    //This particular ShaderMaterial is meant to act as a debug or "Hello World" case.

    const scroll = useScroll()

    // useEffect(()=> {
    //     console.log(ref)
    //     console.log(ref.current)
    // }, [ref])

    useFrame(({ clock }) => {
        
        if (ref.current) {
            ref.current.uniforms.uTime.value = clock.getElapsedTime()
            
        }
    })

    const shaderMaterial = useMemo(()=> new THREE.ShaderMaterial({
            vertexShader: testVertex,
            fragmentShader: testFragment,
            uniforms:{
                uTime: {value: 0},
                uResolution: {value: new THREE.Vector4()},
                uMouse: {value: new THREE.Vector2()},
                uScrollY: {value: 0},
            },
            wireframe: false,
        }), [])

    return <primitive object={shaderMaterial} ref={ref} attach="material" />
})

extend({TestMeshShaderMaterial})


export default TestMeshShaderMaterial