import React, {useRef, useState, useEffect} from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import TestMeshShaderMaterial from './TestMeshShaderMaterial'
import { useScroll } from '@react-three/drei'



function TestMesh() {
    const meshRef = useRef()
    const materialRef = useRef()
    const {size, viewport, camera} = useThree()
    const scroll = useScroll()

    // useEffect(()=> {console.log(scroll)}, [])
    // useFrame(() => {
    //     const offset = 1 - scroll.offset
    //     console.log(offset)
    // })

    useFrame(()=>{
        const offset = scroll.offset
        // console.log(meshRef.current.position.y)
        console.log(viewport.height)
        // console.log(offset)
        if (meshRef.current) {
            meshRef.current.position.y = (-offset * viewport.height) * 4
            // meshRef.current.position.set(camera.position.x, camera.position.y, camera.position.z)
            // meshRef.current.position.y -= (offset - 0.5) * viewport.height
        }

        if (materialRef.current) {
            materialRef.current.uniforms.uScrollY.value = offset;
        }
    })
  




    return (

                <mesh ref = {meshRef}>
                    <planeGeometry
                        args = {[viewport.width/1.5, viewport.height/1.5]}
                        attach="geometry"
                    />
                    <TestMeshShaderMaterial ref={materialRef} />
                </mesh>

    )
}

export default TestMesh