import React, {useMemo, forwardRef, useEffect, useState, useRef} from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import testVertex from './TestShaders/vertex.glsl'
import testFragment from './TestShaders/fragment.glsl'

const TestMeshShaderMaterial = forwardRef((props, ref)=> {

    //This particular ShaderMaterial is meant to act as a debug or "Hello World" case.

    // const [scrollPositionY, setScrollPositionY] = useState(0)

    // useEffect(()=> {
    //     console.log("The useEffect() is triggered")
    //     const handleScrollY = () => {
    //         console.log("The scroll handler is triggered")
    //         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         setScrollPositionY(window.scrollY/scrollableHeight)
    //         if (ref) {
    //             ref.current.uniforms.uScrollY.value = scrollPositionY
    //         }
    //     }

    //     console.log("Adding event listener...")
    //     window.addEventListener('scroll', handleScrollY)

    //     console.log("Event Listener added!")
    //     return () => {
    //         console.log("removing event Listener")
    //         window.removeEventListener('scroll',handleScrollY)

    //         console.log("Event Listener Removed")
    //     }
    // }, [ref])



    // useEffect(()=> {
    //     console.log(scrollPositionY)
    // }, [scrollPositionY])

    const scroll = useScroll()

    // useEffect(()=> {
    //     console.log(ref)
    //     console.log(ref.current)
    // }, [ref])

    useFrame(({ clock }) => {
        
        if (ref.current) {
            ref.current.uniforms.uTime.value = clock.getElapsedTime()
            ref.current.uniforms.uScrollY.value = window.scrollY/document.documentElement.scrollableHeight
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
            wireframe: true,
        }), [])

    return <primitive object={shaderMaterial} ref={ref} attach="material" />
})

extend({TestMeshShaderMaterial})


export default TestMeshShaderMaterial