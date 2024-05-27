import React, {useMemo, forwardRef, useEffect, useState, useRef} from 'react'
import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import testVertex from './TestShaders/vertex.glsl'
import testFragment from './TestShaders/fragment.glsl'

const TestMeshShaderMaterial = forwardRef((props, ref)=> {
    // const scrollPosition = useRef({x: 0, y: 0})

    // useEffect(()=>{
    //     console.log("I'm being triggered")
    //     const handleScrollY = () => {
    //         console.log("The HandleScroll is being triggered")
    //         const documentHeight = document.documentElement.scrollHeight
    //         const viewportHeight = window.innerHeight
    //         const scrollableHeight = documentHeight - viewportHeight

    //         scrollPosition.current.y = window.scrollY / scrollableHeight
    //         console.log(scrollPosition.current.y)
    //         ref.current.uniforms.uScrollY.value = scrollPosition.current.y
    //     }
    //     window.addEventListener('scroll', handleScrollY)
    //     console.log("I've been added")
    //     return () => window.removeEventListener('scroll', handleScrollY)
    // }, [ref])

    const [scrollPositionY, setScrollPositionY] = useState(window.scrollY)

    useEffect(()=> {
        console.log("The useEffect() is triggered")
        const handleScrollY = () => {
            console.log("The scroll handler is triggered")
            const currentY = window.scrollY;
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollPositionY(currentY/scrollableHeight)
            if (ref) {
                ref.current.uniforms.uScrollY.value = scrollPositionY
            }
        }

        console.log("Adding event listener...")
        window.addEventListener('scroll', handleScrollY)

        console.log("Event Listener added!")
        return () => {
            console.log("removing event Listener")
            window.removeEventListener('scroll', handleScrollY)

            console.log("Event Listener Removed")
        }
    }, [])

    useEffect(()=> {
        console.log(scrollPositionY)
    }, [scrollPositionY])

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
        }), [])

    return <primitive object={shaderMaterial} ref={ref} attach="material" />
})

extend({TestMeshShaderMaterial})


export default TestMeshShaderMaterial